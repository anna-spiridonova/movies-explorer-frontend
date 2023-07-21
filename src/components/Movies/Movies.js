import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchResult from "../SearchResult/SearchResult";

function Movies({
	movies,
	handleSearch,
	onChange, 
	isChecked, 
	isLoading,
	noResult,
	isSearchSuccessful,
	searchValue,
	handleSave,
	savedMovies,
	handleDelete
}) {

	const isVisible = movies.length!==0 && !noResult && !isLoading;

  return(
		<section className="movies">
			<SearchForm 
				handleSearch={handleSearch} 
				onChange={onChange}
				isChecked={isChecked}
				searchValue={searchValue}
			/>
			{isLoading && <Preloader />}
			{noResult && <SearchResult isSearchSuccessful={isSearchSuccessful} />}
			{isVisible && 
				<MoviesCardList 
					movies={movies} 
					handleSave={handleSave} 
					savedMovies={savedMovies} 
					handleDelete={handleDelete}
				/>
			}
		</section>
  );
}

export default Movies;