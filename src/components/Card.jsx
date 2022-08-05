import React from "react";

// stylesheet imports
import "./style/cards/card.css"

// function component
function Card( {content} ){
 
    return(

     <div className="card-main-div">
        <img src={content.image} className="card-image" />
        <div className="card-name-div">
            <h2 className="card-name">{content.name}</h2>
        </div>
        <span className="add-to-cart">Add to Cart</span>
     </div>

    )
}

export default Card