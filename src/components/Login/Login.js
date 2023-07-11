import "./Login.css";
import PageWithForm from "../PageWithForm/PageWithForm";
import { useState } from "react";

function Login({ onLogin }) {
  const [formValue, setformValue] = useState({
    email: "",
    password: ""
  });

  function handleSubmit(evt) {
    // evt.preventDefault();
    // onLogin();
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setformValue({
      ...formValue,
      [name]: value
    })
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
      >
        <label className="form-page__label">E-mail
          <input
            type="email"
            id="email"
            className="form-page__input"
            name="email"
            required
            value={formValue.email}
            onChange={handleChange}  
          />
        </label>
        <label className="form-page__label">Пароль
          <input
            type="password"
            id="password"
            className="form-page__input"
            name="password"
            required
            value={formValue.password}
            onChange={handleChange}  
          />
        </label>
      </PageWithForm>
		</section>
  );
}

export default Login;