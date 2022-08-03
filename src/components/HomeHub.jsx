import React from "react";

// stylesheet imports
import "./style/hubs/home.css"


// component function
export default ({onLiveShop}) => {

    return (
            <div id="home">
                <h1 id="main-header">iNLiNE</h1>
                <span id="linebreak"></span>
                <div id="fav-list"></div>
                <button id="liveshop" onClick={onLiveShop}>LiveShop</button>
            </div>

    )
}

// data-heading="i"