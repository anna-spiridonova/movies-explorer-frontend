import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-3);
  }

  return(
		<section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__caption">Страница не найдена</p>
      </div>
      <button type="button" className="app__button not-found__button" onClick={goBack}>Назад</button>
		</section>
  );
}

export default NotFound;