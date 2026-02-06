import "./header.scss";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header__inner">
        <a className="logo" href="#hero">
          <span className="logo__mark">Smile</span>
          <span className="logo__sub">Стоматология</span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#services">Услуги</a>
          <a href="#why">Почему мы</a>
          <a href="#reviews">Отзывы</a>
          <a href="#cta">Запись</a>
        </nav>
        <div className="header__actions">
          <a className="phone" href="tel:+74950000000">
            +7 (495) 000-00-00
          </a>
          <a className="btn btn--solid" href="#cta">
            Записаться
          </a>
        </div>
      </div>
    </header>
  );
}
