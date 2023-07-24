import "./Login.css";
import PageWithForm from "../PageWithForm/PageWithForm";

function Login({ onLogin, isSuccess }) {

  function handleSubmit({ email, password }) {
    onLogin(email, password)
  }

  return(
		<section className="login">
      <PageWithForm
        greetings="Рады видеть!"
        name="login-form"
        buttonText="Войти"
        onSubmit={handleSubmit}
        isLogin={true}
        caption="Ещё не зарегистрированы?"
        link="Регистрация"
        isSuccess={isSuccess}
      />
		</section>
  );
}

export default Login;