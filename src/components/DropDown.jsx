import React from "react";

// stylesheet imports
import "./style/buttons/dropdown.css"


// component function
function DropDown ({infoObject, handleCollectionClick, visibility}){
    console.log("ID")
    console.log(infoObject.id)

const dropDownElements = infoObject.tabs.map(each => {
    return (
        <p key={each} className="dropdown-button">{each}</p>
    )
})

   if(Object.keys(visibility).find(key => visibility[key] === true) === infoObject.id) { return (
            <span id={infoObject.id} className={infoObject.class} onClick={handleCollectionClick}>{infoObject.text}
                {dropDownElements}
            </span>
    )
   } else { return (
            <span id={infoObject.id} className={infoObject.class} onClick={handleCollectionClick}>{infoObject.text}
            </span>
)}

}

export default DropDown