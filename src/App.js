import './App.css';
import {Routes, Route}from 'react-router-dom'
import Home from './components/Home';
import Client from './components/Client';
// import InstantQuote from './components/RcSlider';
import { useState } from 'react';
import RcSlider from './components/RcSlider';

function App() {

const [anime, setAnime]=useState()

  //fetch videos
fetch(" http://localhost:3000/animation")
.then((response)=>{return response.json();})  //convert to json
.catch(()=>alert('error'))
.then ((data)=>console.log (data))




  return (
   
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Client" element={<Client/>}/>
  <Route path="/RcSlider" element = {<RcSlider/>}/>


</Routes>
 
  )
  
}

export default App;
