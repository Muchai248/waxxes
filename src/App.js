import './App.css';
import {Routes, Route}from 'react-router-dom'
import Home from './components/Home';
import Client from './components/Client';
import Contact from './components/Contact';
import React, {useState} from 'react';

function App() {

const [collection, setCollection]=useState([])
// const [anime, setAnime]=useState([])





  return (
    <>
<Routes>
  <Route path="/" element={<Home collection={collection} setCollection={setCollection} />}/>
  <Route path="/Client" element={<Client/>}/>
  <Route path="/Contact" element={<Contact/>}/>
</Routes>
</>
  )
}

export default App;
