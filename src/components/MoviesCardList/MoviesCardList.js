import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import {
	DESKTOP_SIZE,
	TABLET_SIZE,
	MOBILE_SIZE,
	DESKTOP_MOVIES_COUNT,
	TABLET_MOVIES_COUNT,
	MOBILE_MOVIES_COUNT,
	DESKTOP_MORE_MOVIES,
	TABLET_MORE_MOVIES,
	MOBILE_MORE_MOVIES,
} from "../../utils/constants";

function MoviesCardList({ movies, handleSave, handleDelete, savedMovies, isLiked }) {
	const [visibleMoviesAmount, setVisibleMoviesAmount] = useState(DESKTOP_MOVIES_COUNT);
	const renderedMovies = movies.slice(0, visibleMoviesAmount);

  useEffect(() => {
    function handleResize() {
      let width = window.innerWidth;
      let moviesCount;
      if (width >= TABLET_SIZE) {
        moviesCount = DESKTOP_MOVIES_COUNT;
      } else if(width >= MOBILE_SIZE) {
        moviesCount = TABLET_MOVIES_COUNT;
			} else {
				moviesCount = MOBILE_MOVIES_COUNT;
			};
      setVisibleMoviesAmount(moviesCount);
    };
    handleResize();
		window.addEventListener('resize', handleResize);
    return() => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	function getMoreMovies() {
		let width = window.innerWidth;
		if (width >=DESKTOP_SIZE) {
			setVisibleMoviesAmount((state) => state + DESKTOP_MORE_MOVIES);
		}else if(width >=TABLET_SIZE) {
			setVisibleMoviesAmount((state) => state + TABLET_MORE_MOVIES);
		}else {
			setVisibleMoviesAmount((state) => state + MOBILE_MORE_MOVIES);
		}
	}

  return(
		<div className="cards">
			<ul className="cards__list">
				{renderedMovies.map((card) => {
					return (
						<MoviesCard 
							key={card.id}
							handleSave={handleSave}
							card={card}
							handleDelete={handleDelete}
							savedMovies={savedMovies}
							isLiked={isLiked}
						/>
					)
				})}
			</ul>
			{movies.length > visibleMoviesAmount && 
				<button type="button" className="app__button cards__button" onClick={getMoreMovies}>Ещё</button>
			}
		</div>
	);
}

export default MoviesCardList;