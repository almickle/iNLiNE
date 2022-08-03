import React , {useState}from "react";

// stylesheet components
import "./style/buttons/left.css"


// component function
function Left({ onLeft }){

    const [visibility, setVisibility] = useState(false)

    function handleHoverIn(){
        setVisibility(true)
    }

    function handleHoverOut() {
        setVisibility(false)
    }

    return(
        <div id="left-div" onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>
            <div id="left-button" onClick={onLeft}>
                <div id="left-arrow"></div>
            </div>
        </div>
    )

}


export default Left