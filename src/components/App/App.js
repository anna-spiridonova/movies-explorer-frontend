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
  const lastPage = localStorage.getItem('lastPage');

  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: ""
  });
  const [isLiked, setIsLiked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(true);
  const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(true);
  const [isEditSuccessful, setIsEditSuccessful] = useState(true);
  const [editResult, setEditResult] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (location.pathname)
    localStorage.setItem('lastPage', location.pathname);
  }, [location.pathname])

// авторизация и регистрация
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
        localStorage.clear();
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
    if(lastPage==="/signin" || lastPage==="/signup") {
      navigate(location.pathname);
    } else {
      navigate(lastPage || location.pathname);
    }
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

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      api.getMovies()
        .then((res) => {
          setSavedMovies(res.reverse());
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }, [loggedIn]);

  // редактор профиля
  function togleEdit() {
    setIsEdit(!isEdit);
    setIsDisabled(false)
  }

  function updateUser({ name, email }) {
    setIsDisabled(true);
    api.editUserInfo(name, email)
    .then((res) => {
      setCurrentUser(res);
      setIsEditSuccessful(true);
      togleEdit()
    })
    .catch((err) => {
      setIsEditSuccessful(false);
      console.log(err)
    })
    .finally(() => {
      setEditResult(true);
      setTimeout(() => setEditResult(false), 3000);
      setIsDisabled(false);
    })
  }

  // сохранение и удаление фильмов
  function handleSaveMovie(movie) {
    api.createMovie({
      image: `https://api.nomoreparties.co${movie.image.url}`, 
      id: movie.id,
      thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
        setIsLiked(true);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleDeleteMovie(movie) {
    api.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== movie._id)); 
        setIsLiked(false);
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
              handleSave={handleSaveMovie}
              savedMovies={savedMovies}
              handleDelete={handleDeleteMovie}
              isLiked={isLiked}
            />
          }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={SavedMovies}
              savedMovies={savedMovies}
              handleDelete={handleDeleteMovie}
            />
          }/>
          <Route path="/profile" element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={Profile}
              onUpdateUser={updateUser}
              onSignOut={handleSignOut}
              isSuccess={isEditSuccessful}
              onResult={editResult}
              togleEdit={togleEdit}
              isEdit={isEdit}
              isDisabled={isDisabled}
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
