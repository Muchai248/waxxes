import React from "react"
import { useNavigate } from "react-router-dom"

export default function Client(){
    const navigate=useNavigate()

const handleClient=()=>{
    navigate("/client")
}


    return(
        <div>
            <button onClick={handleClient}>Client</button>
        </div>
    )
}