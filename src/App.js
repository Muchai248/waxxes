import './App.css';
import {Routes, Route}from 'react-router-dom'
import Home from './components/Home';
import Client from './components/Client';

function App() {
  return (
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Client" element={<Client/>}/>


</Routes>
  )
}

export default App;
