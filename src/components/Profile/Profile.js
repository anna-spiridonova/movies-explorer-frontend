import "./Profile.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

function Profile(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail ] = useState("");

  function handleEditClick() {
    setIsEdit(!isEdit);
  };

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
  }, []); 

function handleSubmitClick(evt) {
  evt.preventDefault();
  setIsEdit(!isEdit);
  props.onUpdateUser({name, email});
}

  return (
    <section className="profile">
      <form className="profile__form">
        <h2 className="profile__greetings">Привет, {props.name}!</h2>
        <label className="profile__info">
          <span className="profile__info-title">Имя</span>
          <input
            className="profile__info-input"
            value={name}
            type="text"
            name="name"
            placeholder="Имя"
            onChange={handleNameChange}
            disabled={!isEdit && true}
          />
        </label>
        <label className="profile__info">
          <span className="profile__info-title">E-mail</span>
          <input
            className="profile__info-input"
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
            disabled={!isEdit && true}
          />
        </label>
        </form>
      <div className="profile__buttons">
        <span className="profile__error"></span>
        <button type="button" className={`app__button profile__edit ${isEdit ? "profile__button_invisible" : ""}`} onClick={handleEditClick}>
          Редактировать
        </button>
        <button type="submit" className={`app__button profile__save ${!isEdit ? "profile__button_invisible" : ""}`} onClick={handleSubmitClick}>
          Сохранить
        </button>
        <NavLink to="/signin" className={`app__button profile__signout ${isEdit ? "profile__button_invisible" : ""}`}>
          Выйти из аккаунта
        </NavLink>
      </div>
    </section>
  );
}

export default Profile;
