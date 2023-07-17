import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ movies }) {
	const location = useLocation();
  const isMovies = location.pathname==="/movies";

  return(
		<div className="cards">
			<ul className="cards__list">
				{movies.map((card) => {
					return (
						<MoviesCard 
							title={card.nameRU} 
							duration={card.duration} 
							image={`https://api.nomoreparties.co/${card.image.url}`}
							key={card.id}
						/>
					)
				})}
			</ul>
			{isMovies && <button type="button" className="app__button cards__button">Ещё</button>}
		</div>
	);
}

export default MoviesCardList;