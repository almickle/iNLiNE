import React from "react";

// stylesheet imports
import "./style/buttons/dropdown.css"


// component function
function DropDown ({ buttonInfo, currentIndex, visibility, handleNavButtonClick, handleDropDownClick }){

const dropDownElements = buttonInfo.tabs.map(each => {
    return (
        <p key={each} className="dropdown-button" onClick={(event) => handleDropDownClick(event, currentIndex)}>{each}</p>
    )
})

   if(visibility[currentIndex] === true) { return (
            <span id={buttonInfo.id} className="nav-button" onClick={handleNavButtonClick}>{buttonInfo.text}
                {dropDownElements}
            </span>
    )
   } else { return (
            <span id={buttonInfo.id} className="nav-button" onClick={handleNavButtonClick}>{buttonInfo.text}
            </span>
            )
        }
}

export default DropDown