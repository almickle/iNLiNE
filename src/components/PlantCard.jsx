import React from "react";

// stylesheet imports
import "./style/cards/plantcard.css"


// component function
function PlantCard({plant}){
    const { name, image, price, description} = plant
    return(
            <div id="plant-card-div">
                <img id="plant-image-div" src={image}></img>
                <h2 id="name">{name}</h2>
                <br></br>
                <h2 id="price">{price}</h2>
                <br></br>
                <h2 id="type">type</h2>
                <br></br>
                <p id="description">{description}</p>
                <br></br>
                <button id="add-to-cart">Add To Cart </button>
            </div>
            
           
    )
}

export default PlantCard