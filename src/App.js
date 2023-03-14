// import logo from './logo.svg';
import ReactGA from "react-ga"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';

import { useEffect } from 'react';
import Temp from "./components/Temp/Temp";


function App() {
  useEffect(()=>{
    ReactGA.initialize('UA-260450577-1');

    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])
  return (
    <>
        <Router>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home/>}>
              </Route>
              <Route  path="/signup" element={<Signup/>}>
              </Route>
              <Route  path="/temp" element={<Temp/>}>
              </Route>
            </Routes>
          </div>
        </Router>
      
    </>
  )
}

export default App;
