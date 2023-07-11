import './App.css';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname==="/";
  const headerVisiblePaths = ["/", "/movies", "/saved-movies", "/profile"];
  const headerVisible = headerVisiblePaths.includes(location.pathname);
  const footerVisiblePaths = ["/", "/movies", "/saved-movies"]
  const footerVisible = footerVisiblePaths.includes(location.pathname);

  const [currentUser, setCurrentUser] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru"
  });

  function handleLogin() {
    navigate("/movies");
  };

  function handleRegister() {
    navigate("/signin");
  };

  function UpdateUser(data) {
    setCurrentUser(data);
  }

  return (
    <div className="app">
      {headerVisible && <Header isLanding={isLanding} />}
      <Routes>
        <Route path="/" element={
          <Main />
        }/>
        <Route path="/movies" element={
          <Movies />
        }/>
        <Route path="/saved-movies" element={
          <SavedMovies />
        }/>
        <Route path="/profile" element={
          <Profile 
          name={currentUser.name}
          email={currentUser.email}
          onUpdateUser={UpdateUser}
          />
        }/>
        <Route path="*" element={
          <NotFound />
        }/>
        <Route path="/signup" element={
          <Register
            onRegister={handleRegister}
          />
        }/>
        <Route path="/signin" element={
          <Login
            onLogin={handleLogin}
          />
        }/>
      </Routes>
      {footerVisible && <Footer />}
    </div>
  );
}

export default App;
