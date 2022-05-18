import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Tour from './components/tours/tour/Tour';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/city/:id" element={<Tour/>}/>
      </Routes>
      

      </>
  );
}

export default App;
