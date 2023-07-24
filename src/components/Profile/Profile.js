import "./Profile.css";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useState, useEffect } from "react";

function Profile({
  onUpdateUser,
  onSignOut,
  isSuccess,
  onResult,
  togleEdit,
  isEdit,
  isDisabled
}) {

  const userInfo = useContext(CurrentUserContext);
  const [formValue, setFormValue] = useState({
    name: "",
    email: ""
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: ""
  })
  const [isValid, setisValid] = useState(false)

  useEffect(() => {
    setFormValue({
      name: userInfo.name,
      email: userInfo.email
    });
  }, [userInfo]); 

  useEffect(() => {
    if(formValue.name===userInfo.name && formValue.email===userInfo.email) {
      setisValid(false)
    }
  }, [userInfo, formValue]); 

  function handleChangeName(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
    setErrorMessage({
      ...errorMessage,
      [name]: evt.target.validationMessage
    });
    setisValid(evt.target.validity.valid);
  }

  function handleChangeEmail(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
    setErrorMessage({
      ...errorMessage,
      [name]: evt.target.validationMessage
    });
    setisValid(evt.target.validity.valid);
  }

  function handleSubmit() {
    onUpdateUser(formValue);
  }

  return (
    <section className="profile">
      <form className="profile__form" name="profile-form" noValidate>
        <h2 className="profile__greetings">Привет, {userInfo.name}!</h2>
        <label className="profile__info">
          <span className="profile__info-title">Имя</span>
          <input
            className={`profile__info-input ${errorMessage.name && "profile__info-input_invalid"}`}
            type="text"
            placeholder="Имя"
            disabled={!isEdit || isDisabled}
            name="name"
            onChange={handleChangeName}
            value={formValue.name}
            minLength={2}
            maxLength={18}
            required
          />
          </label>
          <span className="profile__input-error">{errorMessage.name}</span>
          <label className="profile__info">
            <span className="profile__info-title">E-mail</span>
            <input
              className={`profile__info-input ${errorMessage.email && "profile__info-input_invalid"}`}
              type="email"
              placeholder="Email"
              disabled={!isEdit || isDisabled}
              name="email"
              onChange={handleChangeEmail}
              value={formValue.email}
              required
            />
          </label>
          <span className="profile__input-error">{errorMessage.email}</span>
        </form>
      <div className="profile__buttons">
        <span 
          className={
            `profile__result 
            ${onResult && "profile__result_visible"} 
            ${!isSuccess && "profile__result_error"}`
          }
        >
          {isSuccess ? "Данные упешно обновлены!" : "Что-то пошло не так..."}
        </span>
        <button 
          type="submit" 
          className={`app__button profile__save ${!isEdit ? "app__button_invisible" : ""}`} 
          onClick={handleSubmit}
          disabled={!isValid || isDisabled}
        >
          Сохранить
        </button>
        <button
          type="button"
          className={`app__button profile__edit ${isEdit ? "app__button_invisible" : ""}`} 
          onClick={togleEdit}
        >
          Редактировать
        </button>
        <button 
          type="button" 
          className={`app__button profile__signout ${isEdit ? "app__button_invisible" : ""}`} 
          onClick={onSignOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
