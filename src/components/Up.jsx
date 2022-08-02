import React , {useState}from "react";

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
             <button onClick={onUp} id="up-button" className={visibility.toString()} >
                Up
            </button>   
        </div>
    )

}


export default Up