import "./PageWithForm.css";
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { emailPattern, namePattern } from "../../utils/constants";

function PageWithForm({
  greetings,
  name,
  buttonText,
  onSubmit,
  isLogin,
  caption,
  link,
  isSuccess
}) {

  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  function handleSubmitButton(data) {
    onSubmit(data);
  }

  return(
    <form className="form-page" name={name} onSubmit={handleSubmit(handleSubmitButton)} noValidate>
      <div className="form-page__container">
        <NavLink to="/" className="app__button app__logo">
          <img src={logo} alt="Логотип" />
        </NavLink>
        <h2 className="form-page__greetings">{greetings}</h2>
        <fieldset className="form-page__inputs">
          {!isLogin && (
            <label className="form-page__label">Имя
              <input
                type="text"
                className={`form-page__input ${errors.name && "form-page__input_invalid"}`}
                {...register("name", {
                  required: "Поле должно быть заполенено.",
                  pattern: {
                    value: namePattern,
                    message: "Введено некорректное имя."
                  }
                })}
              />
              {errors.name && (
                <span className="form-page__input-error">
                  {errors.name.message || "Что-то пошло не так..."}
                  </span>
               )}
            </label>
          )}

          <label className="form-page__label">E-mail
            <input
              type="email"
              className={`form-page__input ${errors.email && "form-page__input_invalid"}`}
              {...register("email", {
                required: "Поле должно быть заполенено.",
                pattern: {
                  value: emailPattern,
                  message: "Введён некорректный e-mail."
                }
              })}
            />
            {errors.email && (
              <span className="form-page__input-error">
                {errors.email.message || "Что-то пошло не так..."}
              </span>
            )}
          </label>
          
          <label className="form-page__label">Пароль
            <input
              type="password"
              className={`form-page__input ${errors.password && "form-page__input_invalid"}`}
              {...register("password", {
                required: "Поле должно быть заполенено.",
              })}
            />
              {errors.password && (
                <span className="form-page__input-error">
                  {errors.password.message || "Что-то пошло не так..."}
                </span>
              )}          
            </label>
        </fieldset>
      </div>
      <div className="form-page__container">
        <button
          type="submit"
          className={`app__button form-page__button ${isLogin && "form-page__button_type_login"}`}
          disabled={!isValid}
        >
          {buttonText}
        </button>
        <p className="form-page__caption">{caption}
          <span>
            <NavLink to={`${isLogin ? "/signup" : "/signin"}`} className="app__button form-page__link"> {link}</NavLink>
          </span>
        </p>     
        <span className={`form-page__error ${!isSuccess && "form-page__error_visible"}`}>Что-то пошло не так...</span>  
      </div>
    </form>
  );
}

export default PageWithForm;