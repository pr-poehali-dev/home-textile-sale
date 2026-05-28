import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/48f7c6ea-6edc-41df-9bd1-d1ddd946ae39/files/e547f75d-693c-4d38-bbc4-a878bbb971d8.jpg";
const PILLOWS_IMG = "https://cdn.poehali.dev/projects/48f7c6ea-6edc-41df-9bd1-d1ddd946ae39/files/1da58243-8fbb-46a6-a715-24265ee9b777.jpg";
const KITCHEN_IMG = "https://cdn.poehali.dev/projects/48f7c6ea-6edc-41df-9bd1-d1ddd946ae39/files/8ade72bd-ca09-4e15-9e13-e8acdefbd514.jpg";

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
    icon: "🌸",
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
    icon: "🌿",
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
    icon: "🫧",
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

  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex flex-col leading-none text-left">
            <span className="font-display text-xl font-semibold text-terracotta leading-tight">Подушечка-душечка</span>
            <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Домашний текстиль</span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm font-body">
            {[
              ["Каталог", "catalog"],
              ["О нас", "about"],
              ["Отзывы", "reviews"],
              ["Контакты", "contacts"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-foreground/70 hover:text-terracotta transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+79001234567" className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-terracotta transition-colors">
              <Icon name="Phone" size={14} />
              <span>+7 (900) 123-45-67</span>
            </a>
            <button
              onClick={() => scrollTo("order")}
              className="bg-terracotta text-white text-sm px-4 py-2 rounded-lg hover:bg-terracotta/90 transition-all duration-200 font-medium"
            >
              Заказать
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-4 animate-fade-in">
            {[
              ["Каталог", "catalog"],
              ["О нас", "about"],
              ["Отзывы", "reviews"],
              ["Контакты", "contacts"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-foreground/70 text-sm hover:text-terracotta">
                {label}
              </button>
            ))}
            <a href="tel:+79001234567" className="text-sm text-terracotta font-medium">+7 (900) 123-45-67</a>
            <button onClick={() => scrollTo("order")} className="bg-terracotta text-white text-sm px-4 py-2.5 rounded-lg font-medium">
              Заказать
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden" style={{
        background: "radial-gradient(ellipse at 20% 20%, hsl(350 40% 88% / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, hsl(14 55% 45% / 0.07) 0%, transparent 50%), hsl(36 33% 97%)"
      }}>
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blush/50 text-terracotta text-xs font-body font-medium px-3 py-1.5 rounded-full mb-6 border border-blush" style={{ borderColor: "hsl(350 40% 75% / 0.4)" }}>
              🌸 Уютный домашний текстиль
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-6" style={{ color: "hsl(20 35% 28%)" }}>
              Подушечка-<br />
              <em className="text-terracotta not-italic font-semibold">душечка</em><br />
              <span className="text-3xl md:text-4xl font-light">моя</span>
            </h1>
            <p className="font-body text-foreground/65 text-lg leading-relaxed mb-8 max-w-md">
              Создаём уют дома с любовью. Мягкие подушки, нежное постельное бельё,
              красивые скатерти — всё для вашего комфорта и тепла.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("catalog")}
                className="bg-terracotta text-white px-8 py-3.5 rounded-xl font-body font-medium text-base hover:bg-terracotta/90 transition-all duration-200 hover:shadow-lg"
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo("order")}
                className="border-2 border-terracotta text-terracotta px-8 py-3.5 rounded-xl font-body font-medium text-base hover:bg-terracotta/10 transition-all duration-200"
              >
                Заказать сейчас
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border">
              {[
                ["6+", "категорий товаров"],
                ["100%", "натуральные ткани"],
                ["Доставка", "по всей России"],
              ].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl font-semibold text-terracotta">{val}</div>
                  <div className="font-body text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full opacity-30 blur-3xl" style={{ background: "hsl(350 40% 75%)" }} />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full blur-2xl opacity-60" style={{ background: "hsl(36 60% 93%)" }} />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={HERO_IMG} alt="Постельное бельё" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                <div className="font-display text-sm font-semibold" style={{ color: "hsl(20 35% 28%)" }}>Подушки для сна</div>
                <div className="font-body text-xs text-muted-foreground">50×70, 70×70 см</div>
                <div className="font-body text-sm font-medium text-terracotta mt-0.5">от 1 290 ₽</div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("catalog")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-terracotta transition-colors animate-bounce"
        >
          <span className="font-body text-xs tracking-widest uppercase">Каталог</span>
          <Icon name="ChevronDown" size={18} />
        </button>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-20" style={{ background: "hsl(36 60% 93% / 0.4)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase text-terracotta font-medium">Весь ассортимент</span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2" style={{ color: "hsl(20 35% 28%)" }}>Каталог товаров</h2>
            <div className="mt-4 max-w-xs mx-auto h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(14 55% 45% / 0.3), transparent)" }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border cursor-pointer group hover-lift"
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(20 35% 28% / 0.55), transparent)" }} />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl mb-1">{cat.icon}</div>
                    <div className="font-display text-xl font-medium">{cat.name}</div>
                    <div className="font-body text-xs opacity-80 mt-0.5">{cat.desc}</div>
                  </div>
                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center transition-transform duration-300 ${activeCategory === cat.id ? "rotate-180" : ""}`}>
                    <Icon name="ChevronDown" size={14} className="text-terracotta" />
                  </div>
                </div>

                {activeCategory === cat.id && (
                  <div className="p-4 animate-fade-in border-t border-border">
                    <div className="space-y-1">
                      {cat.products.map((p) => (
                        <div key={p.name} className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-amber-50 transition-colors">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <span className="font-body text-sm text-foreground truncate">{p.name}</span>
                            {p.tag && (
                              <span className="text-xs bg-terracotta/10 text-terracotta px-2 py-0.5 rounded-full font-medium shrink-0">{p.tag}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 shrink-0 ml-2">
                            <span className="font-body text-sm font-semibold text-terracotta whitespace-nowrap">{p.price}</span>
                            <button
                              onClick={(e) => { e.stopPropagation(); scrollTo("order"); }}
                              className="text-xs bg-terracotta text-white px-3 py-1 rounded-lg hover:bg-terracotta/90 transition-colors whitespace-nowrap"
                            >
                              Заказать
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "Leaf", title: "Натуральные ткани", desc: "Хлопок и лён высшего качества" },
              { icon: "Truck", title: "Доставка по России", desc: "Отправляем в любой город" },
              { icon: "Heart", title: "С любовью", desc: "Каждое изделие с заботой" },
              { icon: "RotateCcw", title: "Возврат 14 дней", desc: "Если что-то не понравится" },
            ].map((b) => (
              <div key={b.title} className="text-center p-6 rounded-2xl border border-border" style={{ background: "hsl(36 60% 93% / 0.5)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "hsl(14 55% 45% / 0.1)" }}>
                  <Icon name={b.icon as "Leaf" | "Truck" | "Heart" | "RotateCcw"} size={20} className="text-terracotta" />
                </div>
                <div className="font-display text-base font-semibold mb-1" style={{ color: "hsl(20 35% 28%)" }}>{b.title}</div>
                <div className="font-body text-xs text-muted-foreground">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20" style={{ background: "hsl(350 40% 88% / 0.2)" }}>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={PILLOWS_IMG}
              alt="О нас"
              className="w-full rounded-3xl shadow-xl h-[420px] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="font-display text-3xl font-bold text-terracotta">5 лет</div>
              <div className="font-body text-xs text-muted-foreground">на рынке текстиля</div>
            </div>
          </div>

          <div>
            <span className="font-body text-xs tracking-widest uppercase text-terracotta font-medium">О магазине</span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2 mb-6" style={{ color: "hsl(20 35% 28%)" }}>
              Уют начинается<br />
              <em className="text-terracotta not-italic">с мелочей</em>
            </h2>
            <div className="space-y-4 font-body text-foreground/70 leading-relaxed">
              <p>
                «Подушечка-душечка моя» — семейный магазин домашнего текстиля. Мы верим,
                что домашний уют начинается с маленьких приятных деталей: мягкой подушки,
                красивой скатерти, нежной наволочки.
              </p>
              <p>
                Все наши товары изготовлены из натуральных тканей — хлопка и льна.
                Мы тщательно отбираем поставщиков и следим за качеством каждого изделия.
              </p>
              <p>
                Работаем с 2019 года. Уже более 2 000 довольных покупателей по всей России
                сделали свой дом теплее с нашим текстилем.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                ["2 000+", "довольных клиентов"],
                ["6", "категорий товаров"],
                ["100%", "натуральные материалы"],
              ].map(([v, l]) => (
                <div key={l} className="bg-white rounded-xl px-5 py-3 border border-border text-center">
                  <div className="font-display text-2xl font-semibold text-terracotta">{v}</div>
                  <div className="font-body text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-widest uppercase text-terracotta font-medium">Что говорят клиенты</span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2" style={{ color: "hsl(20 35% 28%)" }}>Отзывы</h2>
            <div className="mt-4 max-w-xs mx-auto h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(14 55% 45% / 0.3), transparent)" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl p-6 border border-border hover-lift" style={{ background: "hsl(36 60% 93% / 0.5)" }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="font-body text-sm text-foreground/75 leading-relaxed mb-5 italic">
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "hsl(14 55% 45% / 0.12)" }}>
                    <Icon name="User" size={16} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold" style={{ color: "hsl(20 35% 28%)" }}>{r.name}</div>
                    <div className="font-body text-xs text-muted-foreground">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="py-20" style={{ background: "hsl(14 55% 45% / 0.06)" }}>
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="font-body text-xs tracking-widest uppercase text-terracotta font-medium">Просто напишите нам</span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-2" style={{ color: "hsl(20 35% 28%)" }}>Оформить заказ</h2>
            <p className="font-body text-sm text-muted-foreground mt-3">
              Оставьте заявку, и мы свяжемся с вами в течение 1 часа
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
            {formSent ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="text-5xl mb-4">🌸</div>
                <h3 className="font-display text-2xl mb-2" style={{ color: "hsl(20 35% 28%)" }}>Спасибо за заявку!</h3>
                <p className="font-body text-sm text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => setFormSent(false)}
                  className="mt-6 text-sm text-terracotta underline"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleOrderSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground/80 mb-1.5 block">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                    placeholder="Как вас зовут?"
                    className="w-full border border-border rounded-xl px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:border-terracotta transition-all"
                    style={{ "--tw-ring-color": "hsl(14 55% 45% / 0.3)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground/80 mb-1.5 block">Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-border rounded-xl px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:border-terracotta transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground/80 mb-1.5 block">Что хотите заказать?</label>
                  <textarea
                    value={orderForm.comment}
                    onChange={(e) => setOrderForm({ ...orderForm, comment: e.target.value })}
                    placeholder="Например: подушки для сна 50×70 — 2 штуки, скатерть на круглый стол..."
                    rows={4}
                    className="w-full border border-border rounded-xl px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:border-terracotta transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-terracotta text-white py-4 rounded-xl font-body font-semibold text-base hover:bg-terracotta/90 transition-all duration-200 hover:shadow-lg"
                >
                  Отправить заявку 🌸
                </button>
                <p className="font-body text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CONTACTS & FOOTER */}
      <section id="contacts" className="py-16" style={{ background: "hsl(20 35% 28%)", color: "white" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="font-display text-3xl font-light mb-2 leading-tight">
                Подушечка-<br />
                <em className="not-italic font-semibold text-terracotta">душечка моя</em>
              </div>
              <p className="font-body text-sm mt-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                Уютный домашний текстиль с доставкой по всей России
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-body text-xs tracking-widest uppercase font-medium mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Связаться с нами</div>
              {[
                { icon: "Phone", label: "+7 (900) 123-45-67", href: "tel:+79001234567" },
                { icon: "Mail", label: "hello@podushka.ru", href: "mailto:hello@podushka.ru" },
                { icon: "MessageCircle", label: "Написать в WhatsApp", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-3 font-body text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name={c.icon as "Phone" | "Mail" | "MessageCircle"} size={14} />
                  </div>
                  {c.label}
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <div className="font-body text-xs tracking-widest uppercase font-medium mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Каталог</div>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => scrollTo("catalog")}
                  className="block font-body text-sm transition-colors hover:text-white text-left"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {c.icon} {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>© 2024 Подушечка-душечка моя. Все права защищены.</span>
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-2 text-xs font-body transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <Icon name="ArrowUp" size={12} />
              Наверх
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
