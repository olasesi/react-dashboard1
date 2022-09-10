import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Buttons from "./pages/buttons/Buttons";
import Forms from "./pages/forms/Forms";
import Icons from "./pages/icons/Icons";
import Tables from "./pages/tables/Tables";
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/header/Header"


function App() {
  return (
    <Router>
    <div className="app-wrapper">
      <div className="sidebar-comp-div">
    <Sidebar/>
    </div>
    <div className="header-body-div">
    <Header/>
   
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui-elements/buttons" element={<Buttons />} />
        <Route path="/forms" element={<Forms/>} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/tables" element={<Tables />} />
      </Routes>
   </div>
     </div>
    
    
    </Router>
  );
}

export default App;
