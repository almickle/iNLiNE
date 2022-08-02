import React from "react"

// stylesheet import
import "./style/hubs/welcome.css"


// component function
export default ({onEnter}) => {

    return (
    <div id="welcome">
        <h2>Welcome to inLine!</h2>
        <p>Your premier digital shopping experience...</p>
        <p>Click to begin your journey</p>
        <button id="enter" onClick={onEnter}>Enter</button>
    </div>
    
    )
}