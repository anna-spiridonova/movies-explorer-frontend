import "./SearchForm.css";
import search_icon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return(
		<div className="search">
			<div className="search__container">
				<img src={search_icon} className="search__icon" alt="Иконка поиска" />
				<form className="search__form" name="search" noValidate>
					<input
						type="text"
						id="movie"
						className="search__input"
						name="movie"
						placeholder="Фильм"
						required
					/>
        	<button type="button" className="app__button search__button" />      
      	</form>
				<FilterCheckbox />
			</div>
  	</div>
	);
}

export default SearchForm;
