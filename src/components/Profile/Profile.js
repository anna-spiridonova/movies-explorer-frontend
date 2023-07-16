import "./Profile.css";
import { useForm } from "react-hook-form";
import { emailPattern, namePattern } from "../../utils/constants";

function Profile({
  name,
  email,
  onUpdateUser,
  onSignOut,
  isSuccess
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
            {...register("name", {
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
              {...register("email", {
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
        {!isSuccess && <span className="profile__error">Что-то пошло не так...</span>}
        <button
          type="submit"
          className="app__button profile__edit"
          onClick={handleSubmit(handleSubmitClick)}
          disabled={!isValid}
        >
          Редактировать
        </button>
        <button type="button" className="app__button profile__signout" onClick={onSignOut}>
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
