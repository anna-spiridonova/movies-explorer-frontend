import './App.css';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { api } from "../../utils/MainApi";
import { MoviesApi } from "../../utils/MoviesApi"
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/auth';
import ProtectedRoute from '../../utils/ProtectedRoute';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname==="/";
  const headerVisiblePaths = ["/", "/movies", "/saved-movies", "/profile"];
  const headerVisible = headerVisiblePaths.includes(location.pathname);
  const footerVisiblePaths = ["/", "/movies", "/saved-movies"]
  const footerVisible = footerVisiblePaths.includes(location.pathname);

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: ""
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(true);
  const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(true);
  const [isEditSuccessful, setIsEditSuccessful] = useState(true);
  const [editResult, setEditResult] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
	
  function handleCheckboxChange() {
		setIsChecked(!isChecked);
	}

  function handleRegister (name, email, password) {
    auth.register(name, email, password) 
      .then(() => {
        setIsRegisterSuccessful(true);
        handleLogin(email, password);
      })
      .catch((err) => {
        setIsRegisterSuccessful(false);
        console.log(err)
      })
      .finally(() => {
        setTimeout(() => setIsRegisterSuccessful(true), 3000);
      })
  }

  function handleLogin (email, password) {
    auth.login(email, password)
    .then((res) => {
      if(res) {
        localStorage.setItem('userId', res._id);
      };
      setIsLoginSuccessful(true);
      setLoggedIn(true);
      navigate("/movies");
    })
    .catch((err) => {
      setIsLoginSuccessful(false);
      console.log(err)
    })
    .finally(() => {
      setTimeout(() => setIsLoginSuccessful(true), 3000);
    })
  }

  function handleSignOut() {
    auth.signOut()
      .then(() => {
        localStorage.removeItem('userId');
        setLoggedIn(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('userId');
    if(!jwt) {
      return
    };
    setLoggedIn(true);
    navigate("/movies");
  }

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      api.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }, [loggedIn]);

  function updateUser({ name, email }) {
    api.editUserInfo(name, email)
    .then((res) => {
      setCurrentUser(res);
      setIsEditSuccessful(true);
    })
    .catch((err) => {
      setIsEditSuccessful(false);
      console.log(err)
    })
    .finally(() => {
      setEditResult(true);
      setTimeout(() => setEditResult(false), 3000);
    })
  }

  function handleMoviesSearch({keyword}) {
    MoviesApi.getInitialMovies()
      .then((res) => {
        if (isChecked) {
          const shortMovies = res.filter(item => (item.nameRU.toLowerCase().includes(keyword)) & item.duration<=40);
          setMovies(shortMovies);
        }
        else {
          const movies = res.filter(item => (item.nameRU.toLowerCase().includes(keyword)));
          setMovies(movies);
        };
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function handleSavedMoviesSearch({keyword}) {
    api.getMovies()
    .then((res) => {
      if (isChecked) {
        const shortMovies = res.filter(item => (item.nameRU.toLowerCase().includes(keyword)) & item.duration<=40);
        setSavedMovies(shortMovies);
      }
      else {
        const movies = res.filter(item => (item.nameRU.toLowerCase().includes(keyword)));
        setSavedMovies(movies);
      };
    })
    .catch((err) => {
      console.log(err)
    });
  }

  return (
    <CurrentUserContext.Provider value = {currentUser}>
      <div className="app">
        {headerVisible && <Header isLanding={isLanding} loggedIn={loggedIn} />}
        <Routes>
          <Route path="/" element={
            <Main />
          }/>
          <Route path="/movies" element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={Movies}
              movies={movies}
              handleSearch={handleMoviesSearch}
              isChecked={isChecked}
              onChange={handleCheckboxChange}
            />
          }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={SavedMovies}
              savedMovies={savedMovies}
              handleSearch={handleSavedMoviesSearch}
            />
          }/>
          <Route path="/profile" element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={Profile}
              name={currentUser.name}
              email={currentUser.email}
              onUpdateUser={updateUser}
              onSignOut={handleSignOut}
              isSuccess={isEditSuccessful}
              onResult={editResult}
            />
          }/>
          <Route path="*" element={
            <NotFound />
          }/>
          <Route path="/signup" element={
            <Register
              onRegister={handleRegister}
              isSuccess={isRegisterSuccessful}
            />
          }/>
          <Route path="/signin" element={
            <Login
              onLogin={handleLogin}
              isSuccess={isLoginSuccessful}
            />
          }/>
        </Routes>
        {footerVisible && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
