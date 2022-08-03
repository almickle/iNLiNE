import React from "react"

// stylesheet import
import "./style/hubs/intro.css"


// component function
export default ({onEnter}) => {

    return (
        <div>
            <span id="span-left"></span>
            <div id="welcome"></div>
            <h1 id="intro-text" onClick={onEnter}>iNLiNE</h1>
            {/* <button id="enter" onClick={onEnter}>ENTER</button> */}
            <span id="span-right"></span>
        </div>
    )
}