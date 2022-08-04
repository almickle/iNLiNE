import React, {useState, useEffect} from "react";
import DropDown from "./DropDown";

// component imports
// import ClothingCard from "./ClothingCard";

// stylesheet imports
import "./style/hubs/clothinghub.css"


// component function
function ClothingHub({handleCardClick}) {

    const [clothingItems, setClothingItems] = useState([{id: "1", image: "https://media.dior.com/couture/ecommerce/media/catalog/product/E/I/1592293527_3SH118YJP_H069_E02_ZHC.jpg?imwidth=870"}])
    const [dropDownVisibility, setDropDownVisibility] = useState({collection: false, sort: false, filter: false})

    useEffect(() => {
      fetch("http://localhost:3000/clothing")
      .then(resp => resp.json())
      .then(data => setClothingItems(data))
    }, [])

    useEffect(() => {
        for (const key in dropDownVisibility) {
            if(dropDownVisibility[key] === true) {
                document.getElementById(key).style.height = "fit-content"
            } else {
                document.getElementById(key).style.height = "70%"
            }
        }

    }, [dropDownVisibility])

    function handleCollectionClick() {
        setDropDownVisibility({collection: true, sort: false, filter: false})
    }

    function handleSortClick(event) {
        setDropDownVisibility({collection: false, sort: true, filter: false})
    }

    function handleFilterClick(event) {
        setDropDownVisibility({collection: false, sort: false, filter: true})
    }
    

    const clothingElements = clothingItems.map((clothing) => {   
        return(
            <div key={clothing.id} className="clothing-image-div">
                <img key={clothing.id} className="clothing-image" src={clothing.image} onClick={()=>handleCardClick(clothing)}></img>
            </div>
        )
    })

    const collectionInfo = {
        id: "collection",
        class: "nav-button",
        text: "Collections",
        tabs: ["Premier", "Dior", "Catabran", "Elexia"]
    }

    const sortInfo = {
        id: "sort",
        class: "nav-button",
        text: "Sort",
        tabs: ["Price", "Trend"]
    }

    const filterInfo = {
        id: "filter",
        class: "nav-button",
        text: "Filter",
        tabs: ["Gender", "Designer", "Type"]
    }

    return (
        <div id="clothing-hub">
            <h1 id="clothing-main-header">Collection</h1>
            <span id="linebreak-C"></span>
            <div id="nav-bar">
                <DropDown infoObject={collectionInfo} handleCollectionClick={handleCollectionClick} visibility={dropDownVisibility} />
                <DropDown infoObject={filterInfo} handleCollectionClick={handleFilterClick} visibility={dropDownVisibility} />
                <DropDown infoObject={sortInfo} handleCollectionClick={handleSortClick} visibility={dropDownVisibility} />
            </div>
            <div id="clothing-items">
                {clothingElements}
            </div>

        </div>
    )
}

export default ClothingHub