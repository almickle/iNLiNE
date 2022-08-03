import React, {useState, useEffect} from "react";

// component imports
import ClothingCard from "./ClothingCard";

// stylesheet imports
import "./style/hubs/clothinghub.css"


// component function
function ClothingHub() {

    const [clothingItems, setClothingItems] = useState([{id: "1", image: "https://media.dior.com/couture/ecommerce/media/catalog/product/E/I/1592293527_3SH118YJP_H069_E02_ZHC.jpg?imwidth=870"}])

    useEffect(() => {
      fetch("http://localhost:3000/clothing")
      .then(resp => resp.json())
      .then(data => setClothingItems(data))
    }, [])
    

    const clothingElements = clothingItems.map((clothing) => {   
        return(
            <div key={clothing.id} className="clothing-image-div">
                <img key={clothing.id} className="clothing-image" src={clothing.image}></img>
            </div>
        )
    })

    return (
        <div id="clothing-hub">
            <h1 id="clothing-main-header">Graham's Fashion</h1>
            <span id="linebreak-C"></span>
            <div id="clothing-items">
                {clothingElements}
            </div>
        </div>
    )
}

export default ClothingHub