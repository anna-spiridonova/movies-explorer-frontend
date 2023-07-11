import "./PageWithForm.css";
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function PageWithForm({
  greetings,
  name,
  children,
  buttonText,
  onSubmit,
  isLogin,
  caption,
  link
}) {
  return(
    <form className="form-page" name={name}>
      <div className="form-page__container">
        <NavLink to="/" className="app__button app__logo">
          <img src={logo} alt="Логотип" />
        </NavLink>
        <h2 className="form-page__greetings">{greetings}</h2>
        <fieldset className="form-page__inputs">
          {children}
        </fieldset>
        <span className="form-page__error"></span>
      </div>
      <div className="form-page__container">
        <button
          type="submit"
          className={`app__button form-page__button ${isLogin ? "form-page__button_type_login" : ""}`}
          onClick={onSubmit}
        >
          {buttonText}
        </button>
        <p className="form-page__caption">{caption}
          <span>
            <NavLink to={`${isLogin ? "/signup" : "/signin"}`} className="app__button form-page__link"> {link}</NavLink>
          </span>
        </p>       
      </div>
    </form>
  );
}

export default PageWithForm;