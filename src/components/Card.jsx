import React from "react";

// stylesheet imports
import "./style/cards/card.css"

// function component
function Card( {content} ){
 
    return(

     <div className="card-main-div">
        <h3 className="card-collection">Collection: {content.collection}</h3>
        <h3 className="card-price">${content.price}</h3>
        <p className="card-description">{content.description}</p>
        <img src={content.image} className="card-image" />
        <div className="card-name-div">
            <h2 className="card-name">{content.name}</h2>
        </div>
        <span className="add-to-cart">Add to Cart</span>
     </div>

    )
}

export default Card