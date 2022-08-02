import React from "react";

// stylesheet imports
import "./style//hubs/home.css"


// component function
export default ({onLiveShop}) => {

    return (
    <div id="home">
        <button id="liveshop" onClick={onLiveShop}>LiveShop</button>
    </div>
    
    )
}