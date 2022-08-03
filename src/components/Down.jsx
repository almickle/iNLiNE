import React , {useState}from "react";

// stylesheet imports
import "./style/buttons/down.css"


// component function
function Down({ onDown }){

    const [visibility, setVisibility] = useState(false)

    function handleHoverIn(){
        setVisibility(true)
    }

    function handleHoverOut() {
        setVisibility(false)
    }

    return(
        <div id="down-div" onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>
            <div id="down-button" onClick={onDown}>
                <div id="down-arrow"></div>
            </div>
        </div>
    )

}


export default Down