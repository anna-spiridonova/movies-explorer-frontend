import "./Register.css";
import PageWithForm from "../PageWithForm/PageWithForm";

function Register({ onRegister, isSuccess }) {

  function handleSubmit({ name, email, password }) {
    onRegister(name, email, password)
  }

  return(
		<section className="register">
      <PageWithForm
        greetings="Добро пожаловать!"
        name="register-form"
        buttonText="Зарегистрироваться"
        onSubmit={handleSubmit}
        caption="Уже зарегистрированы?"
        link="Войти"
        isSuccess={isSuccess}
      />
		</section>
  );
}

export default Register;