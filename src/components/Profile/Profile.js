import "./Profile.css";
import { useForm } from "react-hook-form";
import { emailPattern, namePattern } from "../../utils/constants";

function Profile({
  name,
  email,
  onUpdateUser,
  onSignOut,
  isSuccess,
  onResult,
  togleEdit,
  isEdit
}) {

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: name,
      email: email,
    },
  });

  function handleSubmitClick(data) {
    onUpdateUser(data);
  }

  return (
    <section className="profile">
      <form className="profile__form" name="profile-form" noValidate>
        <h2 className="profile__greetings">Привет, {name}!</h2>
        <label className="profile__info">
          <span className="profile__info-title">Имя</span>
          <input
            className={`profile__info-input ${errors.name && "profile__info-input_invalid"}`}
            type="text"
            placeholder="Имя"
            disabled={!isEdit}
            {...register("name", {
              required: "Поле должно быть заполенено.",
              pattern: {
                value: namePattern,
                message: "Введено некорректное имя."
              }
            })}
          />
          {errors.name && (
            <span className="profile__input-error">
              {errors.name.message || "Что-то пошло не так..."}
            </span>
          )}
          </label>
          <label className="profile__info">
            <span className="profile__info-title">E-mail</span>
            <input
              className={`profile__info-input ${errors.email && "profile__info-input_invalid"}`}
              type="email"
              placeholder="Email"
              disabled={!isEdit}
              {...register("email", {
                required: "Поле должно быть заполенено.",
                pattern: {
                  value: emailPattern,
                  message: "Введён некорректный e-mail."
                }
              })}
            />
            {errors.email && (
              <span className="profile__input-error">
                {errors.email.message || "Что-то пошло не так..."}
              </span>
            )}
          </label>
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
          onClick={handleSubmit(handleSubmitClick)}
          disabled={!isValid}
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
