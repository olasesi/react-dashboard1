import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Buttons from "./pages/buttons/Buttons";
import Forms from "./pages/forms/Forms";
import Icons from "./pages/icons/Icons";
import Tables from "./pages/tables/Tables";

function App() {
  return (
    <Router>
    <div className="App">
   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui-elements/buttons" element={<Buttons />} />
        <Route path="/forms" element={<Forms/>} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/tables" element={<Tables />} />
      </Routes>
   
     
    
    </div>
    </Router>
  );
}

export default App;
