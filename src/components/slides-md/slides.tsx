import { useState, type CSSProperties, type FormEvent } from "react";
import { Title } from "../title-md/title";
import "./slides.scss";

type FormState = "idle" | "loading" | "success" | "error";

type Service = {
  title: string;
  text: string;
};

type Reason = {
  label: string;
  value: string;
  text: string;
};

type Review = {
  name: string;
  text: string;
  meta: string;
};

const services: Service[] = [
  {
    title: "Профгигиена и чистка",
    text: "Удаляем налет и камень, полируем эмаль, подбираем домашний уход."
  },
  {
    title: "Пломбирование",
    text: "Лечение под микроскопом, точный цвет, восстановление формы зуба."
  },
  {
    title: "Отбеливание",
    text: "Деликатно осветляем эмаль на 2-6 тонов за один визит."
  },
  {
    title: "Диагностика 3D",
    text: "Снимок и подробный план лечения в день обращения."
  },
  {
    title: "Имплантация",
    text: "Современные системы, при необходимости - установка за 1 день."
  },
  {
    title: "Детская стоматология",
    text: "Мягкая адаптация, лечение во сне и забота о маленьких пациентах."
  }
];

const reasons: Reason[] = [
  {
    label: "Опыт",
    value: "12 лет",
    text: "Врачи с узкой специализацией и регулярным повышением квалификации."
  },
  {
    label: "Сертификаты",
    value: "ISO + лицензия",
    text: "Работаем официально, используем сертифицированные материалы."
  },
  {
    label: "Отзывы",
    value: "4.9/5",
    text: "Пациенты рекомендуют нас за аккуратность и понятные планы лечения."
  }
];

const reviews: Review[] = [
  {
    name: "Мария К.",
    text: "Очень боялась лечить зуб, но здесь все сделали спокойно и быстро. Врач объяснил каждый шаг.",
    meta: "Пломбирование, ноябрь"
  },
  {
    name: "Дмитрий С.",
    text: "Чистка прошла идеально - впервые без дискомфорта. Записался на отбеливание.",
    meta: "Профгигиена, декабрь"
  },
  {
    name: "Алина Р.",
    text: "Сыну 7 лет, приняли без слез. Очень понравилась детская зона и отношение врача.",
    meta: "Детский прием, январь"
  }
];

export function Slides() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const isLoading = status === "loading";
  const isError = status === "error";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setName("");
      setPhone("");
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="slides">
      <section id="hero" className="slide hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="pill">Стоматология Smile</span>
            <h1 className="hero__title">
              Здоровая улыбка
              <span>за 1 визит</span>
            </h1>
            <p className="hero__subtitle">
              Диагностика, лечение и забота о пациентах. Без очередей, с понятной стоимостью и
              вниманием к каждой детали.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#cta">
                Записаться на прием
              </a>
              <a className="btn btn--ghost" href="#services">
                Смотреть услуги
              </a>
            </div>
            <div className="hero__stats">
              <div>
                <strong>7 200+</strong>
                <span>довольных пациентов</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>поддержка после визита</span>
              </div>
              <div>
                <strong>45 мин</strong>
                <span>среднее лечение</span>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__card hero__card--top">
              <span>Онлайн-консультация</span>
              <strong>15 минут</strong>
            </div>
            <div className="hero__card hero__card--mid">
              <span>Гарантия на работы</span>
              <strong>до 3 лет</strong>
            </div>
            <div className="hero__card hero__card--bottom">
              <span>Точная диагностика</span>
              <strong>3D-снимок</strong>
            </div>
            <div className="hero__shape"></div>
          </div>
        </div>
      </section>

      <section id="problem" className="slide problem">
        <div className="container problem__grid">
          <div className="problem__text">
            <Title
              eyebrow="Проблема"
              title="Болит зуб? Не откладывайте визит"
              subtitle="Чем раньше начать лечение, тем проще и дешевле оно пройдет. Мы уберем боль и вернем комфорт уже на первом приеме."
            />
          </div>
          <div className="problem__card">
            <h3>Что чаще всего беспокоит</h3>
            <ul>
              <li>Острая или тянущая боль</li>
              <li>Чувствительность к холодному и горячему</li>
              <li>Кариес и сколы эмали</li>
              <li>Дискомфорт после лечения</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="slide services">
        <div className="container">
          <Title
            eyebrow="Услуги"
            title="Чистка, пломбирование, отбеливание"
            subtitle="Полный спектр стоматологии в одном месте - от профилактики до сложного лечения."
          />
          <div className="cards-grid">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="card reveal"
                style={{ "--delay": `${0.1 + index * 0.08}s` } as CSSProperties}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="slide why">
        <div className="container">
          <Title
            eyebrow="Почему мы"
            title="Доверие, опыт, подтвержденные результаты"
            subtitle="Сертификаты, опыт врачей и настоящие отзывы - основа нашей репутации."
          />
          <div className="why__grid">
            {reasons.map((reason) => (
              <article key={reason.label} className="why__card">
                <span className="why__label">{reason.label}</span>
                <strong>{reason.value}</strong>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
          <div className="why__strip">
            <div>
              <strong>Сертифицированные врачи</strong>
              <span>Регулярное обучение и участие в конференциях.</span>
            </div>
            <div>
              <strong>Современное оборудование</strong>
              <span>Микроскоп, 3D-диагностика, мягкая анестезия.</span>
            </div>
            <div>
              <strong>Прозрачная стоимость</strong>
              <span>Смета и план лечения до начала работ.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="slide reviews">
        <div className="container">
          <Title
            eyebrow="Отзывы"
            title="Пациенты возвращаются к нам снова"
            subtitle="Ниже - реальные сценарии, которые слышим почти каждый день."
            align="center"
          />
          <div className="reviews__grid">
            {reviews.map((review) => (
              <article key={review.name} className="review">
                <p>"{review.text}"</p>
                <div className="review__meta">
                  <strong>{review.name}</strong>
                  <span>{review.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="slide cta">
        <div className="container cta__grid">
          <div className="cta__content">
            <Title
              eyebrow="Запись"
              title="Оставьте заявку - мы перезвоним в течение 15 минут"
              subtitle="Укажите имя и номер телефона. Администратор подберет удобное время и ответит на вопросы."
            />
            <div className="cta__notes">
              <span>Без очередей</span>
              <span>Комфортная анестезия</span>
              <span>Гарантия на работы</span>
            </div>
          </div>
          <form className="cta__form" onSubmit={handleSubmit} aria-busy={isLoading}>
            <label>
              Имя
              <input
                type="text"
                name="name"
                placeholder="Например, Анна"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                aria-invalid={isError}
                aria-describedby="cta-status"
                required
              />
            </label>
            <label>
              Телефон
              <input
                type="tel"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                inputMode="tel"
                autoComplete="tel"
                aria-invalid={isError}
                aria-describedby="cta-status"
                required
              />
            </label>
            <button className="btn btn--solid" type="submit" disabled={isLoading}>
              {isLoading ? "Отправляем..." : "Отправить заявку"}
            </button>
            <p
              id="cta-status"
              className={`form-status form-status--${status}`}
              role="status"
              aria-live="polite"
            >
              {status === "success" && "Спасибо! Мы уже готовим для вас удобное время."}
              {status === "error" && "Пожалуйста, заполните оба поля или попробуйте позже."}
              {status === "idle" && "Нажимая кнопку, вы соглашаетесь с политикой обработки данных."}
            </p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <strong>Smile</strong>
            <span>Стоматология в центре города</span>
          </div>
          <div>
            <span>Ежедневно 09:00-21:00</span>
            <span>ул. Примерная, 12</span>
          </div>
          <div>
            <span>+7 (495) 000-00-00</span>
            <span>hello@smile-clinic.ru</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
