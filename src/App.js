import React from "react";
import Footer from './Footer';
import Test from "./Test";
import Home from "./Home";
import Result from "./Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
