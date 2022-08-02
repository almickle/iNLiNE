import React from "react";

// stylesheet imports
import "./style/cards/clothingcard.css"


// function component
function ClothingCard({image}){
    return(
            <img id="clothing-image" src={image}></img>
    )
}

export default ClothingCard