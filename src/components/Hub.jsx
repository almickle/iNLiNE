import React, {useState, useEffect} from "react";

// stylesheet imports
import "./style/hubs/nfthub.css"
import "./style/buttons/dropdown.css"

import DropDown from "./DropDown";


// component function
function Hub({infoObject, hubInfo}) {
    
    const [dropDownVisibility, setDropDownVisibility] = useState({collection: false, sort: false, filter: false})

    console.log(hubInfo)
    const { hub, imgdivID, imageID, spanID, divID, navbarID, text } = infoObject
    const content = hubInfo


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

    const contentElements = content.map((item) => {   
        return(
            <div key={item.id} id={imgdivID} className="mincard-div">
                <img key={item.id} id={imageID} className="minicard-img" src={item.image}></img>
            </div>
            )
    })

    return (
        <div className="hub">
            <h1 className="hub-header">{text}</h1>
            <span id={spanID} className="hub-span"></span>
            <div id={navbarID} className="navbar">
                <DropDown infoObject={collectionInfo} handleCollectionClick={handleCollectionClick} visibility={dropDownVisibility} />
                <DropDown infoObject={filterInfo} handleCollectionClick={handleFilterClick} visibility={dropDownVisibility} />
                <DropDown infoObject={sortInfo} handleCollectionClick={handleSortClick} visibility={dropDownVisibility} />
            </div>
            <div id={divID} className="items-container">
                {contentElements}
            </div>
        </div>
    )
}

export default Hub