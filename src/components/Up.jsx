import React, {useState} from "react";

// stylesheet imports
import "./style/buttons/up.css"


// component function
function Up({ onUp }){

    const [visibility, setVisibility] = useState(false)

    function handleHoverIn(){
        console.log(visibility)
        setVisibility(true)
    }

    function handleHoverOut() {
        console.log(visibility)
        setVisibility(false)
    }

    return(

        <div id="up-div" onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>
            <div id="up-button" onClick={onUp}>
                <div id="up-arrow"></div>
            </div>
        </div>

    )

}


export default Up