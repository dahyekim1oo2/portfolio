import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Skills from './page/Skills';
import "./css/main.css";
import Pj from './page/Pj';




function App() {
  // Route => url을 의미함

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About />}/> 
      <Route path='/pj' element={<Pj />}/> 
      <Route path='/skills' element={<Skills />}/> 

    </Routes>


  );
}

export default App;