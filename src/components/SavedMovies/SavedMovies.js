import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchResult from "../SearchResult/SearchResult";
import { useState, useEffect } from "react";
import { filter, handleFilter } from "../../utils/filter";
import { api } from "../../utils/MainApi";

function SavedMovies({ 
	savedMovies,
	handleDelete,
}) {

	const [renderedSavedMovies, setRenderedSavedMovies] = useState([]);
	const [noResult, setNoResult] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
  const [isSearchSuccessful, setIsSearchSuccessful] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const isVisible = savedMovies.length!==0 && !noResult && !isLoading;

	useEffect(() => {
    setRenderedSavedMovies(savedMovies)
  }, [savedMovies])

  function handleCheckboxChange(evt) {
    setIsChecked(evt.target.checked);
    handleSearch(searchValue, evt.target.checked);
	}

  function handleSearchError() {
    setNoResult(true);
    setIsSearchSuccessful(false)
  }

  function handleLoading() {
    setNoResult(false);
    setIsLoading(true);
    setIsSearchSuccessful(true)
  }

	function handleSearch(keyword, isChecked) {
    handleLoading();
    api.getMovies()
    .then((res) => {
      const filteredMovies = filter(res, keyword, isChecked);
      handleFilter(filteredMovies, setRenderedSavedMovies, setNoResult);
			setSearchValue(keyword);
    })
    .catch((err) => {
      handleSearchError();
      console.log(err)
    })
    .finally(() => setIsLoading(false));
  }

  return(
		<section className="saved-movies">
			<SearchForm 
				handleSearch={handleSearch}
				onChange={handleCheckboxChange}
				isChecked={isChecked}
				/>
			{isLoading && <Preloader />}
			{noResult && <SearchResult isSearchSuccessful={isSearchSuccessful} />}
			{isVisible && 
				<MoviesCardList 
					movies={renderedSavedMovies} 
					handleDelete={handleDelete} 
				/>
			}
		</section>
  );
}

export default SavedMovies;