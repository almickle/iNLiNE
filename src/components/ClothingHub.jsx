import React, {useState, useEffect} from "react";

// component imports
// import ClothingCard from "./ClothingCard";

// stylesheet imports
import "./style/hubs/clothinghub.css"


// component function
function ClothingHub({handleCardClick}) {

<<<<<<< HEAD
    const [clothingItems, setClothingItems] = useState([{id: "1", image: "https://media.dior.com/couture/ecommerce/media/catalog/product/E/I/1592293527_3SH118YJP_H069_E02_ZHC.jpg?imwidth=870"}])
    const [dropDownVisible, setDropDownVisible] = useState({collection: false, sort: false, filter: false})
=======
    const [clothingItems, setClothingItems] = useState([])
>>>>>>> 9fa744e1767e87d449c984cf70f9ade50116eccc

    useEffect(() => {
      fetch("http://localhost:3000/clothing")
      .then(resp => resp.json())
      .then(data => setClothingItems(data))
    }, [])

    useEffect(() => {
        for (const key in dropDownVisible) {
            if(dropDownVisible[key] === true) {
            const currentDropDown = document.getElementById(key)
                  currentDropDown.style.height = "400%"
            } else {
                document.getElementById(key).style.height = "70%"
            }
        }

    }, [dropDownVisible])

    function handleCollectionClick() {
        setDropDownVisible({collection: true, sort: false, filter: false})
    }

    function handleSortClick(event) {
        setDropDownVisible({collection: false, sort: true, filter: false})
    }

    function handleFilterClick(event) {
        setDropDownVisible({collection: false, sort: false, filter: true})
    }
    

    const clothingElements = clothingItems.map((clothing) => {   
        return(
            <div key={clothing.id} className="clothing-image-div">
                <img key={clothing.id} className="clothing-image" src={clothing.image} onClick={()=>handleCardClick(clothing)}></img>
            </div>
        )
    })

    return (
        <div id="clothing-hub">
            <h1 id="clothing-main-header">Collection</h1>
            <span id="linebreak-C"></span>
            <div id="nav-bar">
                <span id="collection" className="nav-button" onClick={handleCollectionClick}>Collections</span>
                <span id="sort" className="nav-button" onClick={handleSortClick}>Sort</span>
                <span id="filter" className="nav-button" onClick={handleFilterClick}>Filter</span>
            </div>
            <div id="clothing-items">
                {clothingElements}
            </div>

        </div>
    )
}

export default ClothingHub