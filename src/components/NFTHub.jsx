import React, {useState, useEffect} from "react";

// component imports
import NFTCard from "./NFTCard"

// stylesheet imports
import "./style/hubs/nfthub.css"


// component function
function NFTHub() {

    const [nftItems, setNftItems] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/nft")
      .then(resp => resp.json())
      .then(data => setNftItems(data))
    }, [])
    

    const nftElements = nftItems.map((nft) => {   
        return(
            <div key={nft.id} className="nft-image-div">
                <img key={nft.id} className="nft-image" src={nft.image}></img>
            </div>
            )
    })

    return (
        <div className="hub">
            <h1 id="nft-main-header">NFT Store</h1>
            <span id="linebreak-nft"></span>
            <div id="nft-items">
                {nftElements}
            </div>
        </div>
    )
}

export default NFTHub