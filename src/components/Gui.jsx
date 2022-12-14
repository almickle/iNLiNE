import { useState } from "react"

// component imports
import Intro from "./Intro"
import HomeHub from "./HomeHub"

import Left from "./Left"
import Right from "./Right"
import Up from "./Up"
import Down from "./Down"
import CardCard from "./CardCard"
import Hub from "./Hub"

import Card from "./Card"


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
            tabs: ["CryptoPunk","Bibos","Bored Apes" , "Clone X", "Rakkudos"]
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
            tabs: ["ALYX", "Dior", "Catabran", "Jean-PG", "Rick-Owens"]
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

function handleLiveShop() {
    setGuiElements()
    const gui = document.getElementById('gui')
          gui.style.backgroundColor = "white"
          gui.style.height = "10%"
          gui.style.top = "90%"
}

function handleUpClick() {
    setGuiElements([<CardCard key="Card" />, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick} />, <Down key="DB" onDown={handleDownClick} />])
}

function handleHomeClick(){
    setGuiElements([<HomeHub key="HH" onLiveShop={handleLiveShop}/>, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick} />, <Down key="DB" onDown={handleDownClick}/>])
}

function handleLeftClick() {
    setGuiElements([<Hub infoObject={nftStyleInfo} handleHomeClick={handleHomeClick} handleCardClick={handleCardClick} key="NH" />, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick} />, <Down key="DB" onDown={handleDownClick} />])
}

function handleRightClick() {
    setGuiElements([<Hub infoObject={clothingStyleInfo} handleHomeClick={handleHomeClick} handleCardClick={handleCardClick} key="CH"/>, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick}/>, <Down key="DB" onDown={handleDownClick} />])
}

function handleDownClick() {
    setGuiElements([<Hub infoObject={plantStyleInfo} handleHomeClick={handleHomeClick} handleCardClick={handleCardClick} key="PH" />, <Left key="LB" onLeft={handleLeftClick} />, <Right key="RB" onRight={handleRightClick}/>,  <Down key="DB" onDown={handleDownClick} />])
}

function handleCardClick (item) {
    setGuiElements([<Card key="Card" content={item} />, <Left key="LB" onLeft={handleLeftClick}/>])
}


// jsx output
    return (
        <div id="gui">
            {GuiElements}
        </div>
    )
}