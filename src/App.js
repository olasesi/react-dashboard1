import {BrowserRouter as Router, Switch, Route, Routes, Link, BrowserRouter} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Charts from "./pages/charts/Charts";
import Forms from "./pages/forms/Forms";
import Icons from "./pages/icons/Icons";
import Tables from "./pages/tables/Tables";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path="/">
       <Route index element={<Home/>}/>
       <Route path="charts" element={<Charts/>}/>
       <Route path="forms" element={<Forms/>}/>
       <Route path="icons" element={<Icons/>}/>
       <Route path="tables" element={<Tables/>}/>
     </Route>
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
