import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/48f7c6ea-6edc-41df-9bd1-d1ddd946ae39/files/92aa41af-227b-4d54-8f18-643f655ddb4f.jpg";
const PILLOWS_IMG = "https://cdn.poehali.dev/projects/48f7c6ea-6edc-41df-9bd1-d1ddd946ae39/files/b887e6ea-f389-4c3d-b7a5-affa3309d738.jpg";
const KITCHEN_IMG = "https://cdn.poehali.dev/projects/48f7c6ea-6edc-41df-9bd1-d1ddd946ae39/files/99709bdc-2f3a-459b-9e31-ee90022a61ac.jpg";
const TEXTURE_BG = "https://cdn.poehali.dev/projects/48f7c6ea-6edc-41df-9bd1-d1ddd946ae39/bucket/df5c7b5d-95b9-4a38-88b7-bc340f9a352b.jpeg";

// Brand colors
const C = {
  teal:       "hsl(183 48% 36%)",
  tealLight:  "hsl(183 42% 52%)",
  tealPale:   "hsl(183 30% 88%)",
  tealBg:     "hsl(183 20% 94%)",
  grey:       "hsl(210 10% 60%)",
  greyLight:  "hsl(210 8% 92%)",
  choco:      "hsl(25 45% 26%)",
  chocoDark:  "hsl(22 50% 18%)",
  white:      "#ffffff",
};

const categories = [
  {
    id: 1,
    name: "Декоративные подушки",
    desc: "Размеры: 40×40, 50×50 см",
    icon: "🛋️",
    img: PILLOWS_IMG,
    products: [
      { name: "Подушка декоративная 40×40", price: "690 ₽", tag: "Хит" },
      { name: "Подушка декоративная 50×50", price: "890 ₽", tag: "" },
      { name: "Набор 2 подушки 40×40", price: "1 250 ₽", tag: "Выгодно" },
    ],
  },
  {
    id: 2,
    name: "Подушки для сна",
    desc: "Размеры: 50×70, 70×70 см",
    icon: "😴",
    img: HERO_IMG,
    products: [
      { name: "Подушка для сна 50×70", price: "1 290 ₽", tag: "" },
      { name: "Подушка для сна 70×70", price: "1 590 ₽", tag: "Хит" },
      { name: "Набор 2 подушки 50×70", price: "2 390 ₽", tag: "Выгодно" },
    ],
  },
  {
    id: 3,
    name: "Постельное бельё",
    desc: "Наволочки и простыни",
    icon: "🛏️",
    img: HERO_IMG,
    products: [
      { name: "Наволочка 50×70", price: "390 ₽", tag: "" },
      { name: "Наволочка 70×70", price: "450 ₽", tag: "" },
      { name: "Простынь 180×220", price: "1 490 ₽", tag: "Хит" },
    ],
  },
  {
    id: 4,
    name: "Покрывала",
    desc: "Для спальни и гостиной",
    icon: "🌿",
    img: PILLOWS_IMG,
    products: [
      { name: "Покрывало 150×200", price: "2 490 ₽", tag: "" },
      { name: "Покрывало 200×220", price: "2 990 ₽", tag: "Хит" },
      { name: "Покрывало детское 100×150", price: "1 690 ₽", tag: "" },
    ],
  },
  {
    id: 5,
    name: "Скатерти и салфетки",
    desc: "Текстиль для стола",
    icon: "🫖",
    img: KITCHEN_IMG,
    products: [
      { name: "Скатерть 120×160", price: "990 ₽", tag: "" },
      { name: "Скатерть 145×220", price: "1 390 ₽", tag: "Хит" },
      { name: "Набор салфеток 6 шт", price: "590 ₽", tag: "Выгодно" },
    ],
  },
  {
    id: 6,
    name: "Кухонные полотенца",
    desc: "Практичные и красивые",
    icon: "🧺",
    img: KITCHEN_IMG,
    products: [
      { name: "Полотенце кухонное 45×60", price: "290 ₽", tag: "" },
      { name: "Набор полотенец 3 шт", price: "750 ₽", tag: "Выгодно" },
      { name: "Набор полотенец 6 шт", price: "1 390 ₽", tag: "Хит" },
    ],
  },
];

const reviews = [
  {
    name: "Марина К.",
    city: "Москва",
    text: "Заказала подушки для всей семьи — качество отличное! Наволочки мягкие, хорошо держат форму после стирки. Обязательно закажу ещё.",
    stars: 5,
  },
  {
    name: "Ольга Т.",
    city: "Санкт-Петербург",
    text: "Покрывало пришло быстро, упаковано аккуратно. Цвет точно как на фото, материал приятный. Уже взяла скатерть в подарок маме.",
    stars: 5,
  },
  {
    name: "Светлана В.",
    city: "Краснодар",
    text: "Очень красивые декоративные подушки! Дом сразу стал уютнее. Подушки для сна тоже хороши — сплю как на облаке.",
    stars: 5,
  },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [orderForm, setOrderForm] = useState({ name: "", phone: "", comment: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setOrderForm({ name: "", phone: "", comment: "" });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const textureBg = (overlay = "rgba(255,255,255,0.88)") => ({
    backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${TEXTURE_BG})`,
    backgroundSize: "auto, 320px",
    backgroundRepeat: "no-repeat, repeat",
    backgroundBlendMode: "normal",
  });

  return (
    <div className="min-h-screen font-body overflow-x-hidden" style={textureBg("rgba(248,252,252,0.92)")}>

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border" style={{ ...textureBg("rgba(248,252,252,0.96)") }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          <button onClick={() => scrollTo("hero")} className="flex flex-col leading-none text-left">
            <span className="font-display text-xl font-bold leading-tight" style={{ color: C.teal }}>
              Подушечка-Душечка Моя
            </span>
            <span className="font-body text-xs tracking-widest uppercase" style={{ color: C.grey }}>
              Домашний текстиль
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm font-body">
            {[["Каталог","catalog"],["О нас","about"],["Отзывы","reviews"],["Контакты","contacts"]].map(([label,id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="transition-colors duration-200 hover:text-teal"
                style={{ color: "hsl(25 30% 14% / 0.65)" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.teal)}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(25 30% 14% / 0.65)")}
              >{label}</button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+79001234567" className="flex items-center gap-1.5 text-sm transition-colors"
              style={{ color: "hsl(25 30% 14% / 0.65)" }}>
              <Icon name="Phone" size={14} />
              +7 (900) 123-45-67
            </a>
            <button onClick={() => scrollTo("order")}
              className="text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200"
              style={{ background: C.teal, color: C.white }}>
              Заказать
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-4 animate-fade-in">
            {[["Каталог","catalog"],["О нас","about"],["Отзывы","reviews"],["Контакты","contacts"]].map(([label,id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-sm" style={{ color: "hsl(25 30% 14% / 0.7)" }}>{label}</button>
            ))}
            <a href="tel:+79001234567" className="text-sm font-medium" style={{ color: C.teal }}>+7 (900) 123-45-67</a>
            <button onClick={() => scrollTo("order")} className="text-sm px-4 py-2.5 rounded-lg font-medium text-white" style={{ background: C.teal }}>
              Заказать
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden" style={textureBg("rgba(232,246,246,0.82)")}>
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 text-xs font-body font-medium px-3 py-1.5 rounded-full mb-6 border"
              style={{ background: `${C.tealPale}80`, color: C.teal, borderColor: `${C.tealLight}50` }}>
              ✨ Уютный домашний текстиль
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-light leading-[1.08] mb-3" style={{ color: C.chocoDark }}>
              Подушечка-
            </h1>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.08] mb-3" style={{ color: C.teal }}>
              Душечка Моя
            </h1>
            <p className="font-body text-base leading-relaxed mb-8 max-w-md mt-4" style={{ color: "hsl(25 30% 14% / 0.62)" }}>
              Создаём уют дома с любовью. Мягкие подушки, нежное постельное бельё,
              красивые скатерти — всё для вашего комфорта и тепла.
            </p>

            <div className="flex flex-wrap gap-3">
              <button onClick={() => scrollTo("catalog")}
                className="px-8 py-3.5 rounded-xl font-body font-medium text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ background: C.teal, color: C.white }}>
                Смотреть каталог
              </button>
              <button onClick={() => scrollTo("order")}
                className="px-8 py-3.5 rounded-xl font-body font-medium text-base transition-all duration-200 border-2"
                style={{ borderColor: C.teal, color: C.teal }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = `${C.tealPale}80`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
              >
                Заказать сейчас
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-10 pt-8 border-t border-border">
              {[["6+","категорий товаров"],["100%","натуральные ткани"],["Доставка","по всей России"]].map(([v,l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold" style={{ color: C.teal }}>{v}</div>
                  <div className="font-body text-xs mt-0.5" style={{ color: C.grey }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -top-8 -right-8 w-80 h-80 rounded-full blur-3xl opacity-25" style={{ background: C.tealLight }} />
            <div className="absolute -bottom-4 -left-4 w-48 h-48 rounded-full blur-2xl opacity-40" style={{ background: C.tealPale }} />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={HERO_IMG} alt="Постельное бельё" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-4 left-4 rounded-2xl px-4 py-3 shadow-xl"
                style={{ background: "rgba(255,255,255,0.93)", backdropFilter: "blur(10px)" }}>
                <div className="font-display text-sm font-semibold" style={{ color: C.choco }}>Подушки для сна</div>
                <div className="font-body text-xs mt-0.5" style={{ color: C.grey }}>50×70, 70×70 см</div>
                <div className="font-body text-sm font-bold mt-0.5" style={{ color: C.teal }}>от 1 290 ₽</div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => scrollTo("catalog")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce transition-colors"
          style={{ color: C.grey }}>
          <span className="font-body text-xs tracking-widest uppercase">Каталог</span>
          <Icon name="ChevronDown" size={18} />
        </button>
      </section>

      {/* ── CATALOG ── */}
      <section id="catalog" className="py-20" style={textureBg("rgba(225,244,244,0.85)")}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase font-semibold" style={{ color: C.teal }}>Весь ассортимент</span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2" style={{ color: C.chocoDark }}>Каталог товаров</h2>
            <div className="mt-4 max-w-xs mx-auto h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.teal}55, transparent)` }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id}
                className="rounded-2xl overflow-hidden shadow-sm border border-border cursor-pointer group hover-lift"
                style={{ borderColor: "hsl(210 10% 88%)", ...textureBg("rgba(255,255,255,0.92)") }}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={cat.img} alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${C.chocoDark}cc, transparent 55%)` }} />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl mb-1">{cat.icon}</div>
                    <div className="font-display text-xl font-medium">{cat.name}</div>
                    <div className="font-body text-xs opacity-75 mt-0.5">{cat.desc}</div>
                  </div>
                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 flex items-center justify-center transition-transform duration-300 ${activeCategory === cat.id ? "rotate-180" : ""}`}>
                    <Icon name="ChevronDown" size={14} style={{ color: C.teal }} />
                  </div>
                </div>

                {activeCategory === cat.id && (
                  <div className="p-4 animate-fade-in border-t border-border">
                    {cat.products.map((p) => (
                      <div key={p.name} className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <span className="font-body text-sm truncate" style={{ color: C.chocoDark }}>{p.name}</span>
                          {p.tag && (
                            <span className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
                              style={{ background: `${C.teal}15`, color: C.teal }}>{p.tag}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="font-body text-sm font-bold whitespace-nowrap" style={{ color: C.teal }}>{p.price}</span>
                          <button
                            onClick={(e) => { e.stopPropagation(); scrollTo("order"); }}
                            className="text-xs px-3 py-1 rounded-lg text-white whitespace-nowrap transition-opacity hover:opacity-85"
                            style={{ background: C.teal }}
                          >
                            Заказать
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-16" style={textureBg("rgba(248,252,252,0.90)")}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "Leaf", title: "Натуральные ткани", desc: "Хлопок и лён высшего качества" },
              { icon: "Truck", title: "Доставка по России", desc: "Отправляем в любой город" },
              { icon: "Heart", title: "С любовью", desc: "Каждое изделие с заботой" },
              { icon: "RotateCcw", title: "Возврат 14 дней", desc: "Если что-то не понравится" },
            ].map((b) => (
              <div key={b.title} className="text-center p-6 rounded-2xl border"
                style={{ borderColor: `${C.tealLight}30`, ...textureBg("rgba(255,255,255,0.88)") }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${C.teal}15` }}>
                  <Icon name={b.icon as "Leaf"|"Truck"|"Heart"|"RotateCcw"} size={20} style={{ color: C.teal }} />
                </div>
                <div className="font-display text-base font-semibold mb-1" style={{ color: C.choco }}>{b.title}</div>
                <div className="font-body text-xs" style={{ color: C.grey }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20" style={textureBg("rgba(240,240,238,0.88)")}>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={PILLOWS_IMG} alt="О нас"
              className="w-full rounded-3xl shadow-xl h-[420px] object-cover" />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border"
              style={{ borderColor: `${C.teal}20` }}>
              <div className="font-display text-3xl font-bold" style={{ color: C.teal }}>5 лет</div>
              <div className="font-body text-xs" style={{ color: C.grey }}>на рынке текстиля</div>
            </div>
          </div>

          <div>
            <span className="font-body text-xs tracking-widest uppercase font-semibold" style={{ color: C.teal }}>О магазине</span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2 mb-6" style={{ color: C.chocoDark }}>
              Уют начинается<br />
              <em className="not-italic font-bold" style={{ color: C.teal }}>с мелочей</em>
            </h2>
            <div className="space-y-4 font-body leading-relaxed" style={{ color: "hsl(25 30% 14% / 0.68)" }}>
              <p>«Подушечка-Душечка Моя» — семейный магазин домашнего текстиля. Мы верим,
                что домашний уют начинается с маленьких приятных деталей: мягкой подушки,
                красивой скатерти, нежной наволочки.</p>
              <p>Все наши товары изготовлены из натуральных тканей — хлопка и льна.
                Мы тщательно отбираем поставщиков и следим за качеством каждого изделия.</p>
              <p>Работаем с 2019 года. Уже более 2 000 довольных покупателей по всей России
                сделали свой дом теплее с нашим текстилем.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {[["2 000+","довольных клиентов"],["6","категорий товаров"],["100%","натуральные материалы"]].map(([v,l]) => (
                <div key={l} className="bg-white rounded-xl px-5 py-3 border text-center"
                  style={{ borderColor: `${C.teal}25` }}>
                  <div className="font-display text-2xl font-bold" style={{ color: C.teal }}>{v}</div>
                  <div className="font-body text-xs mt-0.5" style={{ color: C.grey }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20" style={textureBg("rgba(248,252,252,0.90)")}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase font-semibold" style={{ color: C.teal }}>Что говорят клиенты</span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2" style={{ color: C.chocoDark }}>Отзывы</h2>
            <div className="mt-4 max-w-xs mx-auto h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.teal}45, transparent)` }} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl p-6 border hover-lift"
                style={{ borderColor: `${C.tealLight}30`, ...textureBg("rgba(255,255,255,0.88)") }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed mb-5 italic" style={{ color: "hsl(25 30% 14% / 0.72)" }}>
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: `${C.teal}18` }}>
                    <Icon name="User" size={16} style={{ color: C.teal }} />
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold" style={{ color: C.choco }}>{r.name}</div>
                    <div className="font-body text-xs" style={{ color: C.grey }}>{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER FORM ── */}
      <section id="order" className="py-20" style={textureBg("rgba(218,240,240,0.84)")}>
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="font-body text-xs tracking-widest uppercase font-semibold" style={{ color: C.teal }}>Просто напишите нам</span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2" style={{ color: C.chocoDark }}>Оформить заказ</h2>
            <p className="font-body text-sm mt-3" style={{ color: C.grey }}>
              Оставьте заявку, и мы свяжемся с вами в течение 1 часа
            </p>
          </div>

          <div className="rounded-3xl p-8 shadow-xl border" style={{ borderColor: `${C.teal}18`, ...textureBg("rgba(255,255,255,0.94)") }}>
            {formSent ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="font-display text-2xl mb-2" style={{ color: C.chocoDark }}>Спасибо за заявку!</h3>
                <p className="font-body text-sm" style={{ color: C.grey }}>Мы свяжемся с вами в ближайшее время.</p>
                <button onClick={() => setFormSent(false)} className="mt-6 text-sm underline" style={{ color: C.teal }}>
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleOrderSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium mb-1.5 block" style={{ color: "hsl(25 30% 14% / 0.8)" }}>Ваше имя *</label>
                  <input type="text" required value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                    placeholder="Как вас зовут?"
                    className="w-full border rounded-xl px-4 py-3 font-body text-sm bg-background focus:outline-none transition-all"
                    style={{ borderColor: "hsl(210 10% 84%)" }}
                    onFocus={e => (e.target.style.borderColor = C.teal)}
                    onBlur={e => (e.target.style.borderColor = "hsl(210 10% 84%)")}
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium mb-1.5 block" style={{ color: "hsl(25 30% 14% / 0.8)" }}>Телефон *</label>
                  <input type="tel" required value={orderForm.phone}
                    onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border rounded-xl px-4 py-3 font-body text-sm bg-background focus:outline-none transition-all"
                    style={{ borderColor: "hsl(210 10% 84%)" }}
                    onFocus={e => (e.target.style.borderColor = C.teal)}
                    onBlur={e => (e.target.style.borderColor = "hsl(210 10% 84%)")}
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium mb-1.5 block" style={{ color: "hsl(25 30% 14% / 0.8)" }}>Что хотите заказать?</label>
                  <textarea value={orderForm.comment}
                    onChange={(e) => setOrderForm({ ...orderForm, comment: e.target.value })}
                    placeholder="Например: подушки для сна 50×70 — 2 штуки, скатерть на круглый стол..."
                    rows={4}
                    className="w-full border rounded-xl px-4 py-3 font-body text-sm bg-background focus:outline-none transition-all resize-none"
                    style={{ borderColor: "hsl(210 10% 84%)" }}
                    onFocus={e => (e.target.style.borderColor = C.teal)}
                    onBlur={e => (e.target.style.borderColor = "hsl(210 10% 84%)")}
                  />
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl font-body font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg text-white"
                  style={{ background: C.teal }}>
                  Отправить заявку ✨
                </button>
                <p className="font-body text-xs text-center" style={{ color: C.grey }}>
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER / CONTACTS ── */}
      <section id="contacts" className="py-16" style={{ background: C.chocoDark, color: C.white }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 items-start">

            <div>
              <div className="font-display text-2xl font-light leading-tight mb-1" style={{ color: C.white }}>
                Подушечка-
              </div>
              <div className="font-display text-2xl font-bold leading-tight mb-3" style={{ color: C.tealLight }}>
                Душечка Моя
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Уютный домашний текстиль с доставкой по всей России
              </p>
            </div>

            <div>
              <div className="font-body text-xs tracking-widest uppercase font-medium mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
                Связаться с нами
              </div>
              {[
                { icon: "Phone", label: "+7 (900) 123-45-67", href: "tel:+79001234567" },
                { icon: "Mail", label: "hello@podushka.ru", href: "mailto:hello@podushka.ru" },
                { icon: "MessageCircle", label: "Написать в WhatsApp", href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href}
                  className="flex items-center gap-3 font-body text-sm mb-3 transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.08)" }}>
                    <Icon name={c.icon as "Phone"|"Mail"|"MessageCircle"} size={14} />
                  </div>
                  {c.label}
                </a>
              ))}
            </div>

            <div>
              <div className="font-body text-xs tracking-widest uppercase font-medium mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
                Каталог
              </div>
              {categories.map((c) => (
                <button key={c.id} onClick={() => scrollTo("catalog")}
                  className="block font-body text-sm mb-2 text-left transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.55)" }}>
                  {c.icon} {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
              © 2024 Подушечка-Душечка Моя. Все права защищены.
            </span>
            <button onClick={() => scrollTo("hero")}
              className="flex items-center gap-2 text-xs font-body transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.38)" }}>
              <Icon name="ArrowUp" size={12} />
              Наверх
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}