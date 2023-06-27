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
    <div className="navigation">
      <div className={`navigation__overlay ${menu ? "navigation__overlay_active" : ""}`}></div>
      <nav className={`navigation__menu ${menu ? "navigation__menu_active" : ""}`}>
        <div className="link__container">
          <NavLink to="/" className="navigation__link navigation__link_hidden">Главная</NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>`navigation__link ${isActive ? "navigation__link_active" : ""}`}
            onClick={handleMenuClick}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>`navigation__link ${isActive ? "navigation__link_active" : ""}`}
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
          className="navigation__close-button"
          alt="Кнопка закрытия меню"
          onClick={handleMenuClick}
        />
      ) : (
        <img
          src={menu_icon}
          className="navigation__menu-button"
          alt="Кнопка меню"
          onClick={handleMenuClick}
        />
      )}
    </div>
  );
}

export default Navigation;