import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from '../Header/Header';

function App() {
  const location = useLocation();
  const isLanding = location.pathname==="/";

  return (
    <div className="App">
      <Header 
      isLanding={isLanding}
      />
    </div>
  );
}

export default App;
