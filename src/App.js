// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Tour from './components/tours/tour/Tour';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/city/:id" element={<Tour/>}/>
      </Routes>
      <Home/>
      
      </>
  );
}

export default App;