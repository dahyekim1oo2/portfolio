import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Skills from './routes/Skills';
import "./css/main.css";
import Pj from './routes/Pj';




function App() {
  // Route => url을 의미함

  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`}  element={<Home />}/>
      <Route path={`${process.env.PUBLIC_URL}/about`}  element={<About />}/> 
      <Route path={`${process.env.PUBLIC_URL}/pj`}  element={<Pj />}/> 
      <Route path={`${process.env.PUBLIC_URL}/skills`} element={<Skills />}/> 

    </Routes>


  );
}

export default App;