import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ savedMovies, handleSearch }) {
  return(
		<section className="saved-movies">
			<SearchForm handleSearch={handleSearch} />
			<MoviesCardList movies={savedMovies} />
		</section>
  );
}

export default SavedMovies;