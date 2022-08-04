import React from "react";

// stylesheet imports
import "./style/buttons/dropdown.css"


// component function
function DropDown ({ buttonInfo, handleCollectionClick, visibility }){

const dropDownElements = buttonInfo.tabs.map(each => {
    return (
        <p key={each} className="dropdown-button">{each}</p>
    )
})

   if(Object.keys(visibility).find(key => visibility[key] === true) === buttonInfo.id) { return (
            <span id={buttonInfo.id} className="nav-button" onClick={handleCollectionClick}>{buttonInfo.text}
                {dropDownElements}
            </span>
    )
   } else { return (
            <span id={buttonInfo.id} className={buttonInfo.class} onClick={handleCollectionClick}>{buttonInfo.text}
            </span>
)}

}

export default DropDown