import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchResult from "../SearchResult/SearchResult";

function SavedMovies({ 
	savedMovies, 
	handleSearch,
	onChange,
	isChecked,
	isLoading,
	noResult,
	searchValue,
	handleDelete,
	isSearchSuccessful
}) {

	const isVisible = savedMovies.length!==0 && !noResult && !isLoading;

  return(
		<section className="saved-movies">
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
					movies={savedMovies} 
					handleDelete={handleDelete} 
				/>
			}
		</section>
  );
}

export default SavedMovies;