import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

function App() {
  const location = useLocation();
  const isLanding = location.pathname==="/";
  const headerVisiblePaths = ["/", "/movies", "/saved-movies", "/profile"]
  const headerVisible = headerVisiblePaths.includes(location.pathname);
  const footerVisiblePaths = ["/", "/movies", "/saved-movies"]
  const footerVisible = footerVisiblePaths.includes(location.pathname);

  return (
    <div className="App">
      {headerVisible && <Header isLanding={isLanding} />}
      <Routes>
        <Route path="/" element={
          <Main />
        }/>
        <Route path="/movies" element={
          <Movies />
        }/>
      </Routes>
      
      {footerVisible && <Footer />}
    </div>
  );
}

export default App;
