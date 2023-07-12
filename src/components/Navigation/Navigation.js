import './Navigation.css';
import menu_icon from '../../images/menu-icon.svg';
import menu_close from '../../images/menu-close.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const [menu, setMenu] = useState(false);
  const handleMenuClick = () => {
    setMenu(!menu)
  };

  return (
    <section className="navigation">
      <div className={`navigation__overlay ${menu ? "navigation__overlay_active" : ""}`}></div>
      <nav className={`navigation__menu ${menu ? "navigation__menu_active" : ""}`}>
        <div className="navigation__container">
          <NavLink to="/" className="app__button navigation__link navigation__link_hidden">Главная</NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>`app__button navigation__link ${isActive ? "navigation__link_active" : ""}`}
            onClick={handleMenuClick}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>`app__button navigation__link ${isActive ? "navigation__link_active" : ""}`}
            onClick={handleMenuClick}
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <NavLink to="/profile" className="navigation__profile-link" onClick={handleMenuClick}>Аккаунт</NavLink>
      </nav>
      {menu ? (
        <img
          src={menu_close}
          className="app__button navigation__close-button"
          alt="Кнопка закрытия меню"
          onClick={handleMenuClick}
        />
      ) : (
        <img
          src={menu_icon}
          className="app__button navigation__menu-button"
          alt="Кнопка меню"
          onClick={handleMenuClick}
        />
      )}
    </section>
  );
}

export default Navigation;