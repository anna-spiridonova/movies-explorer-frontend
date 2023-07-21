import "./SearchResult.css";

function SearchResult({ isSearchSuccessful }) {
  return (
    <div className="result">
      <p className={`result__caption ${!isSearchSuccessful && "result__caption_type_error"}`}>
        {isSearchSuccessful
          ? "Ничего не найдено."
          : "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
        }
      </p>
    </div>
  );
};

export default SearchResult;