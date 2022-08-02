import React, {useState, useEffect} from "react";

// component imports
import NFTCard from "./NFTCard"

// stylesheet imports
import "./style/nfthub.css"


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
            <NFTCard key={nft.id} image={nft.image} />
            )
    })

    return (
        <div id="nft-hub">
            {nftElements}
        </div>
    )
}

export default NFTHub