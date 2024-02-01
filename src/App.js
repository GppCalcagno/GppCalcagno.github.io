import React, { useState, useEffect } from "react";
import './App.css';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import WIP from "./components/WIP";
import Blog from "./components/Blog/Blog";

import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

import Preloader from "../src/components/Pre";
import ScrollToTop from "./components/ScrollToTop";

import ReactGA from 'react-ga';

//useLocation,
import { HashRouter as Router, Route,Routes, } from "react-router-dom";

ReactGA.initialize('G-QMKN075KNQ');

function App() {
  

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
          <Route path="/about" element={<About />} />
          
          <Route path="/blog" element={<WIP />} /> Blog
          <Route path="/about/chess" element={<WIP />} />
          <Route path="/about/todo" element={<WIP />} />
          <Route path="/about/books" element={<WIP />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
