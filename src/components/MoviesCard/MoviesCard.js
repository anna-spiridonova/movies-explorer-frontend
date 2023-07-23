import "./MoviesCard.css";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

function MoviesCard({  handleSave, card, handleDelete, savedMovies, isLiked }) {
  const location = useLocation();
  const isMovies = location.pathname==="/movies";
  const [save, setSave] = useState(false);
  
  useEffect(() => {
    setSave(isLiked)
  }, [isLiked])

  function handleSaveClick() {
    if(save) {
      const mov = savedMovies.find((item) => card.id === item.id);
      handleDelete(mov)
    } else {
      handleSave(card)
    }
  };

  function handleDeleteClick () {
    handleDelete(card)
  }

  useEffect(() => {
    if (isMovies) {
      const isSaved = savedMovies.some((item) => card.id === item.id)
      setSave(isSaved)
    }
  }, [savedMovies])

  function getDuration(min) {
    let hours = Math.trunc(min/60);
    let minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  };

  return(
		<li className="card">
      <a className="card__trailer-link" href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="card__image" src={isMovies ? `https://api.nomoreparties.co/${card.image.url}` : card.image} alt="Обложка фильма"/>
      </a>
        <div className="card__container">
          <h3 className="card__title">{card.nameRU}</h3>
          {isMovies ? (
            <button
              type="button"
              className={`app__button card__button card__button_type_like ${save && "card__button_type_like_active"}`}
              onClick={handleSaveClick}
            />
          ) : (
            <button
              type="button"
              className="card__button card__button_type_delete"
              onClick={handleDeleteClick}
            />
          )}
        </div>
        <span className="card__duration">{getDuration(card.duration)}</span>
		</li>
	);
}

export default MoviesCard;