import React, { useState, useEffect } from "react";
import './App.css';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

import Projects from "./components/projects/Projects";

import Preloader from "../src/components/Pre";
import ScrollToTop from "./components/ScrollToTop";


import {
  HashRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";


function App() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;