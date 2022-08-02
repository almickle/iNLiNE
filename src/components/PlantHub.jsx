import React, {useState, useEffect} from "react";

// component imports
import PlantCard from "./PlantCard"

// stylesheet imports
import "./style/planthub.css"


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
            <PlantCard key={plant.id} image={plant.image} />
            )
    })

    return (
        <div id="plant-hub">
            {plantElements}
        </div>
    )
}

export default PlantHub