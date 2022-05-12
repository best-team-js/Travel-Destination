// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from "./components/Navbar/Navba";
import TourDetails from './components/TourDetails/TourDetails';
const travelData=require("./data/db.json");


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home data={travelData}/>}/>
      <Route path='/city/:id' element= {<TourDetails data={travelData}/>}/>
    </Routes>
    
    </>
  );
}

export default App;