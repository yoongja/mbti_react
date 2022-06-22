import React from "react";
import Footer from './Footer';
import Test from "./page/Test";
import Home from "./page/Home";
import Result from "./page/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return(
    <>
    <Router>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
    
    <Footer />
    </>
  );
  }

export default App;
