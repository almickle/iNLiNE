import { useState } from "react"

// component imports
import WelcomePage from "./WelcomePage"
import HomeHub from "./HomeHub"

import Left from "./Left"
import Right from "./Right"
import Up from "./Up"
import Down from "./Down"

import NFTHub from "./NFTHub"
import ClothingHub from "./ClothingHub"
import PlantHub from "./PlantHub"
import UserHub from "./UserHub"

// stylesheet imports
import "./style/gui.css"


// component function
export default () => {

const [GuiElements, setGuiElements] = useState([<WelcomePage onEnter={handleEnter} key="WP" />])


// event handling
function handleEnter() {
    setGuiElements([<HomeHub onLiveShop={handleLiveShop} key="HH"/>, <Left key="LH" onLeft={handleLeftClick}/>, <Right key="RH" onRight={handleRightClick}/>, <Up key="UH" onUp={handleUpClick} />, <Down key="DH" onDown={handleDownClick} />])
}

function handleLeftClick() {
    setGuiElements([<NFTHub key="NH"/>])
}
function handleRightClick() {
    setGuiElements([<ClothingHub key="CH"/>, <Right key="R" />])
}

function handleUpClick() {
    setGuiElements([<UserHub key="USH"/>])
}

function handleDownClick() {
    setGuiElements([<PlantHub key= "PH"/>])
}

function handleLiveShop() {
    setGuiElements()
    const gui = document.getElementById('gui')
    gui.style.backgroundColor = "white"
    gui.style.height = "10%"
    gui.style.top = "90%"
}


// jsx output
    return (
        <div id="gui">
            {GuiElements}
        </div>
    )
}