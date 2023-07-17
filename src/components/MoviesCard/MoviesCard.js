import "./MoviesCard.css";
import { useState } from 'react';
import { useLocation } from "react-router-dom";

function MoviesCard({ title, duration, image }) {
  const [save, setSave] = useState(false);
  const handleSaveClick = () => {
    setSave(!save)
  };

	const location = useLocation();
  const isMovies = location.pathname==="/movies";

  function getDuration(min) {
    let hours = Math.trunc(min/60);
    let minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  };

  return(
		<li className="card">
			<img className="card__image" src={image} alt="Обложка фильма"/>
			<div className="card__container">
				<h3 className="card__title">{title}</h3>
        {isMovies ? (
          <button
            type="button"
            className={`app__button card__button card__button_type_like ${save ? "card__button_type_like_active" : ""}`}
            onClick={handleSaveClick}
          />
        ) : (
          <button
            type="button"
            className="card__button card__button_type_delete"
          />
        )}
			</div>
			<span className="card__duration">{getDuration(duration)}</span>
		</li>
	);
}

export default MoviesCard;