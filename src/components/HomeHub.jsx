import React from "react";

// stylesheet imports
import "./style/hubs/home.css"


// component function
export default ({onLiveShop}) => {

    return (

        <div id="home-container">
            <div id="home">
                <h1 id="main-header" data-heading="i">iNLiNE</h1>
            </div>
            <button id="liveshop" onClick={onLiveShop}>LiveShop</button>
        </div>

    )
}