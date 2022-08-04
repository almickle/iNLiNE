import { useState, useEffect } from "react"

// component imports
import Intro from "./Intro"
import HomeHub from "./HomeHub"

import Left from "./Left"
import Right from "./Right"
import Up from "./Up"
import Down from "./Down"

import Hub from "./Hub"
import ClothingHub from "./ClothingHub"
import PlantHub from "./PlantHub"
import PlantCard from "./PlantCard"
import UserHub from "./UserHub"

// stylesheet imports
import "./style/gui.css"


// component function
export default ( {hubInfo} ) => {

const [GuiElements, setGuiElements] = useState([<Intro onEnter={handleEnter} key="WP" />])
const [hubInfo, setHubInfo] = useState({})

useEffect(() => {
  fetch("http://localhost:3000/hubinfo")
  .then(resp => resp.json())
  .then(data => {setHubInfo(data)})
}, [])


// event handling
function handleEnter() {

    const welcome = document.getElementById("welcome")
    const wordart = document.getElementById("intro-text")
    const spanLeft = document.getElementById("span-left")
    const spanRight = document.getElementById("span-right")

        welcome.animate([
            {transform: 'translateX(0px)'},
            {transform: 'translateX(-3500px)'}

        ], { duration: 1100 })
        wordart.animate([
            {transform: 'translateX(0px)'},
            {transform: 'translateX(-3500px)'}

        ], { duration: 1100 })

        setTimeout(() => {
            spanLeft.animate([
                {transform: 'translateX(0px)'},
                {transform: 'translateX(-2000px)'}
    
            ], { duration: 800 })
            spanRight.animate([
                {transform: 'translateX(0px)'},
                {transform: 'translateX(2000px)'}
    
            ], { duration: 800 })
        }, 350)

    setTimeout(() => {
        setGuiElements([<HomeHub onLiveShop={handleLiveShop} key="HH"/>, <Left key="LB" onLeft={handleLeftClick} hubInfo={hubInfo} />, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
    }, 1100)

}

const nftStyleInfo = {
    imgdivID: "nft-image-div",
    imageID: "nft-image",
    headerID: "nft-main-header",
    spanID: "nft-linebreaker",
    divID: "nft-items",
    navbarID: "nft-navbar",
    text: "NFT Store",
}

const clothingStyleInfo = {
    imgdivID: "clothing-image-div",
    imageID: "clothing-image",
    headerID: "clothing-main-header",
    spanID: "clothing-linebreaker",
    divID: "clothing-items",
    navbarID: "clothing-navbar",
    text: "Designer",
}

const plantStyleInfo = {
    imgdivID: "plant-image-div",
    imageID: "plant-image",
    headerID: "plant-main-header",
    spanID: "plant-linebreaker",
    divID: "plant-items",
    navbarID: "plant-navbar",
    text: "Planta Planta",
}

function handleUpClick() {
    setGuiElements([<UserHub key="USH" />, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick} />, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
}

function handleLeftClick() {
    setGuiElements([<Hub infoObject={nftStyleInfo} hubInfo={hubInfo} key="NH" />, <Left key="LB" onLeft={handleLeftClick}/>, <Right key="RB" onRight={handleRightClick} />, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick}/>])
}

function handleRightClick() {
    setGuiElements([<Hub infoObject={clothingStyleInfo} hubInfo={hubInfo} key="CH" handleCardClick={handleCardClick}/>, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
}

function handleDownClick() {
    setGuiElements([<Hub infoObject={plantStyleInfo} hubInfo={hubInfo} key="PH" handleCardClick={handleCardClick} />, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
}

function handleCardClick(clothing){
    setGuiElements([<ClothingHub key={clothing.id} clothing={clothing}/>])
}

function handleCardClick(plant){
    console.log(plant)
    setGuiElements([<PlantCard key={plant.id} plant={plant}/>, <Left key="LB" onLeft={handleRightClick}/>])
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