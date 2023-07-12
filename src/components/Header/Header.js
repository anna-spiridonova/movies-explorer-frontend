import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Route, Routes, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className={`header ${props.isLanding ? "header_type_landing" : ""}`}>
      <div className='header__content'>
        <NavLink to="/" className="app__logo app__button ">
          <img src={logo} alt="Логотип" />
        </NavLink>
        <Routes>
          <Route path="/" element={
            <div className="header__container">
              <NavLink to="/signup" className="app__button header__reg-button">Регистрация</NavLink>
              <NavLink to="/signin" className="app__button header__log-button">Войти</NavLink>  
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
      </div>
    </header>
  );
}

export default Header;