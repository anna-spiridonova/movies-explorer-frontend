import "./SearchForm.css";
import search_icon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState, useEffect } from "react";

function SearchForm({ handleSearch, onChange, isChecked, searchValue }) {

  const [keywordValue, setKeywordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
	const [isValid, setisValid] = useState(true);

	useEffect(() => {
    setKeywordValue(searchValue);
  }, [searchValue]); 

	function handleChangeKeyword(evt) {
    setKeywordValue(evt.target.value);
		setisValid(evt.target.validity.valid);
  };

	function handleSubmit(evt) {
		evt.preventDefault();
		if(!isValid) {
			setErrorMessage("Нужно ввести ключевое слово.");
		} else {
			handleSearch(keywordValue, isChecked);
			setErrorMessage("");
		}
	};

  return(
		<div className="search">
			<div className="search__wrapper">
				<div className="search__container">
					<img src={search_icon} className="search__icon" alt="Иконка поиска" />
					<form className="search__form" name="search" noValidate onSubmit={handleSubmit}>
						<input
							type="text"
							className="search__input"
							placeholder="Фильм"
							name="keyword"
							value={keywordValue || ''}
							onChange={handleChangeKeyword}
							required
						/>
						<button type="submit" className="app__button search__button" />
					</form>
					<FilterCheckbox
						onChange={onChange}
						isChecked={isChecked}
					/>
					<span className="search__input-error">{errorMessage}</span>
				</div>
			</div>
  	</div>
	);
}

export default SearchForm;
