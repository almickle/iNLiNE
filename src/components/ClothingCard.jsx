import React from "react";

// stylesheet imports
import "./style/cards/clothingcard.css"


// function component
function ClothingCard({clothing}){
    const {name, image, collection, price, description} = clothing
    return(
        <div id="clothing-card-div">
        <img id="clothing-image-div" src={image}></img>
        <h2 id="name">{name}</h2>
        <br></br>
        <h2 id="price">{price}</h2>
        <br></br>
        <h2 id="collection">{collection}</h2>
        <br></br>
        <p id="description">{description}</p>
        <br></br>
        <button id="add-to-cart">Add To Cart </button>
    </div>
    )
}

export default ClothingCard