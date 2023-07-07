import "./MoviesCard.css";
import card_image from "../../images/33_design.png";
import { useState } from 'react';
import { useLocation } from "react-router-dom";

function MoviesCard() {
  const [save, setSave] = useState(false);
  const handleSaveClick = () => {
    setSave(!save)
  };

	const location = useLocation();
  const isMovies = location.pathname==="/movies";

  return(
		<li className="card">
			<img className="card__image" src={card_image} alt="Обложка фильма"/>
			<div className="card__container">
				<h3 className="card__title">Gimme Danger: История Игги и The Stooges</h3>
        {isMovies ? (
          <button
            type="button"
            className={`card__button card__button_type_like ${save ? "card__button_type_like_active" : ""}`}
            onClick={handleSaveClick}
          />
        ) : (
          <button
            type="button"
            className="card__button card__button_type_delete"
          />
        )}
			</div>
			<span className="card__duration">1ч 42м</span>
		</li>
	);
}

export default MoviesCard;