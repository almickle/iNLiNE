import React , {useState}from "react";

// stylesheet imports
import "./style/down.css"


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
             <button onClick={onDown} id="down-button" className={visibility.toString()} >
                Down
            </button>   
        </div>
    )

}


export default Down