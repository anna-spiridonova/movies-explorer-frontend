import "./MoviesCardList.css";
import cards from "../../utils/cards"

function MoviesCardList() {
  return(
		<div className="cards">
			<ul className="cards__list">
				{cards}
			</ul>
			<button type="button" className="cards__button">Ещё</button>
		</div>
	);
}

export default MoviesCardList;