import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className={`header ${props.isLanding ? "header_type_landing" : ""}`}>
      <div className='header__content'>
        <NavLink to="/" className="app__logo app__button ">
          <img src={logo} alt="Логотип" />
        </NavLink>
        {props.loggedIn ? (
          <Navigation />
        ) : (
          <div className="header__container">
            <NavLink to="/signup" className="app__button header__reg-button">
              Регистрация
            </NavLink>
            <NavLink to="/signin" className="app__button header__log-button">
              Войти
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;