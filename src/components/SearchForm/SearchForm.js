import "./SearchForm.css";
import search_icon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";

function SearchForm({ handleSearch, onChange, isChecked }) {
	const {
    register,
    formState: {
      errors,
    },
		handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });

	function handleSubmitClick(data) {
		handleSearch(data)
	}

  return(
		<div className="search">
			<div className="search__container">
				<img src={search_icon} className="search__icon" alt="Иконка поиска" />
				<form className="search__form" name="search" noValidate onSubmit={handleSubmit(handleSubmitClick)}>
					<input
						{...register("keyword", {
              required: "Нужно ввести ключевое слово."
						})}
						type="text"
						className="search__input"
						placeholder="Фильм"
					/>
        	<button type="submit" className="app__button search__button" />
      	</form>
				<FilterCheckbox
					onChange={onChange}
					isChecked={isChecked}
				/>
				{errors.keyword && (
          <span className="search__input-error">
            {errors.keyword.message || "Что-то пошло не так..."}
          </span>
        )}
			</div>
  	</div>
	);
}

export default SearchForm;
