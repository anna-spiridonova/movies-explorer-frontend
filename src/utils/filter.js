export const filter = (arr, keyword, isChecked) => {
  if (isChecked) {
    const shortMovies = arr.filter(item => (item.nameRU.toLowerCase().includes(keyword.toLowerCase())) & item.duration<=40);
    return shortMovies
  }
  else {
    const movies = arr.filter(item => (item.nameRU.toLowerCase().includes(keyword.toLowerCase())));
    return movies
  };
}

export const handleFilter = (filteredMovies, setState, setResult) => {
  if (filteredMovies.length===0) {
    setState([]);
    setResult(true);
  } else {
    setState(filteredMovies);
  }
} 