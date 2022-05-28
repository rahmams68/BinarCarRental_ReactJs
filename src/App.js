// import * as React from 'react'
// import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import style from './App.module.css';
import LandingPage from './pages/home'
import CariMobil from './pages/car'


function App() {
  return (
    <div className={style.body}>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='car' element={<CariMobil/>}/>
      </Routes>
    </div>
  );
}

export default App;
