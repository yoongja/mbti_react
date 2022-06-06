import React from "react";
import Footer from './Footer';
import Data from './Data';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return(
    <>
    <Router>
      <Routes>
        <Route path="/test" element={<Data />} />
        <Route path ="/" element={<Home />} />   
      </Routes>
    </Router>
    <Footer />
    </>
  );
  }

export default App;
