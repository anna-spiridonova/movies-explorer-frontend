import "./Register.css";
import PageWithForm from "../PageWithForm/PageWithForm";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

function Register() {
  const [formValue, setformValue] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/signin");
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setformValue({
      ...formValue,
      [name]: value
    })
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
      >
        <label className="form-page__label">Имя
          <input
            type="text"
            id="name"
            className="form-page__input"
            name="name"
            required
            value={formValue.name}
            onChange={handleChange}  
          />
        </label>
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

export default Register;