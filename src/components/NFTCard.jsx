import React from "react";

// stylesheet imports
import "./style/nftcard.css"


// component function
function NFTCard({image}){
    return(
            <img id="nft-image" src={image}></img>
    )
}

export default NFTCard