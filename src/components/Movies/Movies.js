import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ movies, handleSearch, onChange, isChecked }) {
  return(
		<section className="movies">
			<SearchForm 
				handleSearch={handleSearch} 
				onChange={onChange}
				isChecked={isChecked}
			/>
			<MoviesCardList movies={movies} />
		</section>
  );
}

export default Movies;