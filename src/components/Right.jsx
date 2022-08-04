import React , {useState} from "react";

// stylesheet imports
import "./style/buttons/right.css"


// component function
function Right({ onRight }){

    const [visibility, setVisibility] = useState(false)

    function handleHoverIn(){
        setVisibility(true)
    }

    function handleHoverOut() {
        setVisibility(false)
    }

    return(
        <div id="right-div" onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>
            <div id="right-button" onClick={onRight}>
                <div id="right-arrow"></div>
            </div>
        </div>
    )

}


export default Right