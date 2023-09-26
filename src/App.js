import './App.css';
import {Routes, Route}from 'react-router-dom'
import Home from './components/Home';
import Client from './components/Client';
import Contact from './components/Contact';
import RcSlider from './components/Slider';
import React, {useState, useEffect} from 'react';

function App() {

// const [collection, setCollection]=useState([])
const [anime, setAnime]=useState([])

function getAnimations(){
  fetch("http://localhost:8000/animation")
  .then((r)=>r.json())
  .then((data)=>{
    setAnime(data)
    console.log(anime)

  })
}
useEffect(getAnimations,[])



  return (
    <>
<Routes>
  <Route path="/" element={<Home anime={anime} setAnime={setAnime} />}/>
  <Route path="/Client" element={<Client/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/slider" element={<RcSlider/>}/>
</Routes>
</>
  )
}

export default App;
