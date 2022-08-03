import React, {useState} from "react";

// stylesheet imports
import "./style/buttons/up.css"


// component function
function Up({ onUp }){

    const [visibility, setVisibility] = useState(false)

    function handleHoverIn(){
        setVisibility(true)
    }

    function handleHoverOut() {
        setVisibility(false)
    }

    return(
        <div id="up-div" onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>  
            <span id="up-div" onClick={onUp} className={visibility.toString()}></span>
        </div>
    )

}


export default Up