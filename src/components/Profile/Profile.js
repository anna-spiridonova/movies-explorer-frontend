import "./Profile.css";
import { NavLink } from 'react-router-dom';

function Profile() {
  return(
		<div className="profile">
      <div className="profile__wrapper">
        <h2 className="profile__greetings">Привет, Анна!</h2>
        <div className="profile__container">
          <div className="profile__info">
            <span className="profile__info-title">Имя</span>
            <span className="profile__info-item">Анна</span>
          </div>
          <div className="profile__info">
            <span className="profile__info-title">E-mail</span>
            <span className="profile__info-item">pochta@yandex.ru</span>
          </div>
        </div>
      </div>
      <div className="profile__buttons">
        <button type="button" className="profile__edit">Редактировать</button>
        <NavLink to="/signout" className="profile__signout">Выйти из аккаунта</NavLink>
      </div>
		</div>
  );
}

export default Profile;