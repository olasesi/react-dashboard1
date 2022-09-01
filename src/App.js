import React from 'react'
import {BrowserRouter as Router, Switch, Route, Routes, BrowserRouter} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Buttons from "./pages/buttons/Buttons";
import Forms from "./pages/forms/Forms";
import Icons from "./pages/icons/Icons";
import Tables from "./pages/tables/Tables";

function App() {
  return (
    <div className="App">
    {/* <BrowserRouter>
    
      <Routes>
          <Route exact path="/"> */}
            <Home />
          {/* </Route>
          <Route  path="/ui-elements/buttons">
          <Buttons/>
          </Route>
          <Route path="/forms">
          <Forms/>
          </Route>
          <Route path="/icons">
          <Icons/>
          </Route>
          <Route path="/tables">
          <Tables/>
          </Route>
      
     
      
      </Routes>
    
    </BrowserRouter> */}
    </div>
  );
}

export default App;
