import './Navigation.css';
import menu_icon from '../../images/menu-icon.svg';
import menu_close from '../../images/menu-close.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const [menu, setMenu] = useState(false);
  const handleMenuOpen = () => {
    setMenu(true)
  };

  const handleMenuClose = () => {
    setMenu(false)
  };

  return (
    <section className="navigation">
      <div className={`navigation__overlay ${menu ? "navigation__overlay_active" : ""}`}></div>
      <nav className={`navigation__menu ${menu ? "navigation__menu_active" : ""}`}>
        <div className="navigation__container">
          <NavLink 
            to="/" 
            className={({ isActive }) =>`app__button navigation__link navigation__link_hidden ${isActive ? "navigation__link_active" : ""}`}
            onClick={handleMenuClose}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>`app__button navigation__link ${isActive ? "navigation__link_active" : ""}`}
            onClick={handleMenuClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>`app__button navigation__link ${isActive ? "navigation__link_active" : ""}`}
            onClick={handleMenuClose}
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <NavLink 
          to="/profile" 
          className="navigation__profile-link app__button" 
          onClick={handleMenuClose}
        >
          Аккаунт
        </NavLink>
      </nav>
      {menu ? (
        <img
          src={menu_close}
          className="app__button navigation__close-button"
          alt="Кнопка закрытия меню"
          onClick={handleMenuClose}
        />
      ) : (
        <img
          src={menu_icon}
          className="app__button navigation__menu-button"
          alt="Кнопка меню"
          onClick={handleMenuOpen}
        />
      )}
    </section>
  );
}

export default Navigation;