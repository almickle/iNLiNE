import { useState, useEffect } from "react"

// component imports
import Intro from "./Intro"
import HomeHub from "./HomeHub"

import Left from "./Left"
import Right from "./Right"
import Up from "./Up"
import Down from "./Down"

import Hub from "./Hub"
import UserHub from "./UserHub"

import PlantCard from "./PlantCard"

// stylesheet imports
import "./style/gui.css"


// component function
export default ( {} ) => {


// state
const [GuiElements, setGuiElements] = useState([<Intro onEnter={handleEnter} key="WP" />])


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
        setGuiElements([<HomeHub onLiveShop={handleLiveShop} key="HH"/>, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
    }, 1100)

}

const nftStyleInfo = {

    hub: "nft",
    imgdivID: "nft-image-div",
    imageID: "nft-image",
    headerID: "nft-main-header",
    spanID: "nft-linebreaker",
    divID: "nft-items",
    navbarID: "nft-navbar",
    text: "Dark Lake: NFT Gallery",
    buttons: [
        { 
            id: "nft-B1",
            text: "Collections",
            tabs: ["Crypto Punks", "Bored Ape", "NBA Top Shop", "Beeple"]
        },
        { 
            id: "nft-B2",
            text: "Sort",
            tabs: ["Price", "Name"]
        },
    ]
}

const clothingStyleInfo = {

    hub: "clothing",
    imgdivID: "clothing-image-div",
    imageID: "clothing-image",
    headerID: "clothing-main-header",
    spanID: "clothing-linebreaker",
    divID: "clothing-items",
    navbarID: "clothing-navbar",
    text: "Designer",
    buttons: [
        { 
            id: "clothing-B1",
            text: "Collections",
            tabs: ["Alyx", "Dior", "Catabran", "Jean Paul", "Rick Owens"]
        },
        { 
            id: "clothing-B2",
            text: "Filter",
            tabs: ["Gender", "Designer", "Type"]
        },
        { 
            id: "clothing-B3",
            text: "Sort",
            tabs: ["Price", "Name", "Trend"]
        }
    ]
}

const plantStyleInfo = {

    hub: "plants",
    imgdivID: "plant-image-div",
    imageID: "plant-image",
    headerID: "plant-main-header",
    spanID: "plant-linebreaker",
    divID: "plant-items",
    navbarID: "plant-navbar",
    text: "Planta Planta",
    buttons: [
        { 
            id: "plant-B1",
            text: "Collection",
            tabs: ["Home", "Succulents", "Carnivorous", "Fruiting", "Cacti"]
        },
        { 
            id: "plant-B2",
            text: "Filter",
            tabs: ["Lighting", "Genus", "Type"]
        },
        { 
            id: "plant-B3",
            text: "Sort",
            tabs: ["Price", "Name"]
        }
    ]
}

function handleUpClick() {
    setGuiElements([<UserHub key="USH" />, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick} />, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
}


function handleLeftClick() {
    setGuiElements([<Hub infoObject={nftStyleInfo} key="NH" />, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick} />, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} onCardClick={handleCardClick} />])
}

function handleRightClick() {
    setGuiElements([<Hub infoObject={clothingStyleInfo} key="CH"/>, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
}

function handleDownClick() {
    setGuiElements([<Hub infoObject={plantStyleInfo} key="PH" />, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick}/>, <Up key="UB" onUp={handleUpClick} />, <Down key="DB" onDown={handleDownClick} />])
}

// function handleCardClick(clothing){
//     setGuiElements([<ClothingHub key={clothing.id} clothing={clothing}/>])
// }

function handleCardClick(item){
    console.log(item)
    setGuiElements([<PlantCard key={item.id} plant={item}/>, <Left key="LB" onLeft={handleDownClick}/>])
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