import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

function MoviesCardList({ movies, handleSave, handleDelete, savedMovies }) {
	// const location = useLocation();
  // const isMovies = location.pathname==="/movies";
	// const desktopSize = 1280;
	// const tabletSize = 990;
	// const mobileSize = 630;
	const [visibleMoviesAmount, setVisibleMoviesAmount] = useState(12);
	const renderedMovies = movies.slice(0, visibleMoviesAmount);

  useEffect(() => {
    function handleResize() {
      let width = window.innerWidth;
      let moviesCount;
      if (width >= 990) {
        moviesCount = 12;
      } else if(width >= 630) {
        moviesCount = 8;
			} else {
				moviesCount = 5;
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
		if (width >=1280) {
			setVisibleMoviesAmount((state) => state + 4);
		}else if(width >=990) {
			setVisibleMoviesAmount((state) => state + 3);
		}else {
			setVisibleMoviesAmount((state) => state + 2);
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