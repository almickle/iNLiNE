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
    setGuiElements([<HomeHub onLiveShop={handleLiveShop} key="HH"/>, <Left key="LB" onLeft={handleLeftClick}/>, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
}

function handleLeftClick() {
    setGuiElements([<NFTHub key="NH"/>, <Left key="LB" onLeft={handleLeftClick}/>, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
}
function handleRightClick() {
    setGuiElements([<ClothingHub key="CH"/>, <Left key="LB" onLeft={handleLeftClick}/>, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
}

function handleUpClick() {
    setGuiElements([<UserHub key="USH"/>, <Left key="LB" onLeft={handleLeftClick}/>, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
}

function handleDownClick() {
    setGuiElements([<PlantHub key= "PH"/>, <Left key="LB" onLeft={handleLeftClick}/>, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
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