import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Route, Routes, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className={`header ${props.isLanding ? "header_type_landing" : ""}`}>
      <NavLink to="/" className="header__logo">
        <img src={logo} alt="Логотип" />
      </NavLink>
      <Routes>
        <Route path="/" element={
          <div className="header__container">
            <NavLink to="/signup" className="header__reg-button">Регистрация</NavLink>
            <NavLink to="/signin" className="header__log-button">Войти</NavLink>  
          </div>
        }/>
        <Route path="/movies" element={
          <Navigation/>
        }/>
        <Route path="/saved-movies" element={
          <Navigation/>
        }/>
        <Route path="/profile" element={
          <Navigation/>
        }/>
      </Routes>
    </header>
  );
}

export default Header;