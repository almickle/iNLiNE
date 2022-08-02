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
             <button onClick={onLeft} id="left-button" className={visibility.toString()} >
                Left
            </button>   
        </div>
    )

}


export default Left