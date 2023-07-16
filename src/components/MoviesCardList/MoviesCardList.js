import "./MoviesCardList.css";
import cards from "../../utils/cards"
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {

  return(
		<div className="cards">
			<ul className="cards__list">
				{cards.map((card) => (
					<MoviesCard title={card.title} duration={card.duration} image={card.image} key={card.id}/>
				))}
			</ul>
			<button type="button" className="app__button cards__button">Ещё</button>
		</div>
	);
}

export default MoviesCardList;