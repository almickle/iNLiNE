import React, {useState, useEffect} from "react";

// component imports
import PlantCard from "./PlantCard"

// stylesheet imports
import "./style/hubs/planthub.css"


// component function
function PlantHub() {

    const [plantItems, setPlantItems] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/plant")
      .then(resp => resp.json())
      .then(data => setPlantItems(data))
    }, [])
    

    const plantElements = plantItems.map((plant) => {   
        return(
            <div key={plant.id} className="plant-image-div">
                <img key={plant.id} className="plant-image" src={plant.image}></img>
            </div>
        )
    })

    return (
        <div id="plant-hub">
            <h1 id="plant-main-header">Planta Planta</h1>
            <span id="linebreak-P"></span>
            <div id="plant-items">
                {plantElements}
            </div>
        </div>
    )
}

export default PlantHub