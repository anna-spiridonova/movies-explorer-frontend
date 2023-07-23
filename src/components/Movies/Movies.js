import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchResult from "../SearchResult/SearchResult";
import { useState, useEffect } from "react";
import { MoviesApi } from "../../utils/MoviesApi";
import { filter, handleFilter } from "../../utils/filter"

function Movies({
	handleSave,
	savedMovies,
	handleDelete,
	isLiked,
}) {
	const [movies, setMovies] = useState([]);
	const [noResult, setNoResult] = useState(false);
  const [searchValue, setSearchValue] = useState("");
	const [isChecked, setIsChecked] = useState(false);
  const [isSearchSuccessful, setIsSearchSuccessful] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
	
	const isVisible = movies.length!==0 && !noResult && !isLoading;

	function saveSearch(arr, isChecked, keyword) {
    localStorage.setItem('searchInfo', 
      JSON.stringify({
        arr: arr,
        isChecked: isChecked,
        keyword: keyword,
      })
    );
  }

  function getSearch() {
    const searchInfo = JSON.parse(localStorage.getItem('searchInfo'));
    if(!searchInfo) {
      return
    }
    setMovies(searchInfo.arr);
    setIsChecked(searchInfo.isChecked);
    setSearchValue(searchInfo.keyword)
  }

  useEffect(() => {
    getSearch()
  }, []);

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
    MoviesApi.getInitialMovies()
      .then((res) => {
        const filteredMovies = filter(res, keyword, isChecked);
        handleFilter(filteredMovies, setMovies, setNoResult);
        saveSearch(filteredMovies, isChecked, keyword);
        getSearch();
      })      
      .catch((err) => {
        handleSearchError();
        console.log(err)
      })
      .finally(() => setIsLoading(false));
    }

  return(
		<section className="movies">
			<SearchForm 
				handleSearch={handleSearch} 
				onChange={handleCheckboxChange}
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
					savisLikede={isLiked}
				/>
			}
		</section>
  );
}

export default Movies;