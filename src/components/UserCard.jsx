import React from "react";

// stylesheet import
import "./style/usercard.css"


// component function
function UserCard({image}){
    return(
            <img id="user-image" src={image}></img>
    )
}

export default UserCard