import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



export default function Home({anime}){

// const [collection, setCollection]=useState([])
//browsernavigation
const navigate=useNavigate()
const gotohome=()=>{
  navigate("/")
}
const gotoclients=()=>{
  navigate("/clients")
}
const gotocontacts=()=>{
  navigate("/contacts")
}
const gotoslider=()=>{
  navigate("/slider")
}

const animeList=anime.map((animation)=>{
  return(
    <div key={animation.id} className=" col-3 m-5">
  <iframe 
  src={animation.videoUrl}  width='100%' height='250'
    />
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
  )
})
   
 return(
        <>
        <div>
        <nav className="navbar navbar-expand bg-tertiary border-bottom border-body">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#"><img src="..."/></a>
       <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item justify-content-end">
        <button onClick={gotohome} className="nav-link" aria-current="page" href="#">Home</button>
        </li>
        <li className="nav-item">
        <button onClick={gotoclients} className="nav-link " aria-disabled="true">Clients</button>
        </li>
        <li className="nav-item">
        <button onClick={gotocontacts} className="nav-link " aria-disabled="true">Contact Us</button>
        </li>
        <li className="nav-item">
        <button onClick={gotoslider} className="nav-link " aria-disabled="true">RangeQuote</button>
        </li>
        </ul>
       
       
        </div>
        </div>
        </nav>
        </div>
        <div>
        <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" style={{width:"100%"}}/>
        </div>
        <div className="row">
        {animeList}
        </div>
        </>
    )
} 
