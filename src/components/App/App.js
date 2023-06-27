import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from '../Header/Header';

function App() {
  const location = useLocation();
  const isLanding = location.pathname==="/";
  const headerVisibleOnPath = ["/", "/movies", "/saved-movies", "/profile"]
  const headerVisible = headerVisibleOnPath.includes(location.pathname);


  return (
    <div className="App">
      {headerVisible && <Header isLanding={isLanding} />}
    </div>
  );
}

export default App;
