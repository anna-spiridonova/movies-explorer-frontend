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
		<div className="form-page">
      <div className="form-page__container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Логотип" />
        </NavLink>
        <h2 className="form-page__greetings">{greetings}</h2>
        <form className="form-page__form" name={name} noValidate>
          {children}
        </form>
      </div>
      <div className="form-page__wrapper">
        <button
            type="submit"
            className={`form-page__button ${isLogin ? "form-page__button_type_login" : ""}`}
            onClick={onSubmit}
          >
            {buttonText}
          </button>        
        <p className="form-page__caption">{caption}
          <span>
            <NavLink to={`${isLogin ? "/signup" : "/signin"}`} className="form-page__link"> {link}</NavLink>
          </span>
        </p>
      </div>
		</div>
  );
}

export default PageWithForm;