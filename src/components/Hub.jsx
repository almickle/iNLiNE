import React, {useState, useEffect} from "react";

// stylesheet imports
import "./style/hubs/hub.css"
import "./style/hubs/nfthub.css"
import "./style/hubs/clothinghub.css"
import "./style/hubs/planthub.css"
import "./style/buttons/dropdown.css"

// component imports
import DropDown from "./DropDown";


// component function
function Hub({ infoObject }) {

    const { hub, imgdivID, imageID, spanID, divID, navbarID, text, buttons } = infoObject
    
    const [dropDownVisibility, setDropDownVisibility] = useState(buttons.map((button) => button = false))
    const [hubInfo, setHubInfo] = useState({[hub]:[]})

    useEffect(() => {
        fetch("http://localhost:3000/hubinfo")
        .then(resp => resp.json())
        .then(data => setHubInfo(data))
    }, [])

    const content = hubInfo[hub]

    useEffect(() => {
        buttons.forEach(button => {
            document.getElementById(button.id).style.height = "70%"
        })
        if(dropDownVisibility.find((value => value === true))) {
            const elementID = buttons[dropDownVisibility.findIndex((value) => value === true)].id
            document.getElementById(elementID).style.height = "fit-content"
        }

    }, [dropDownVisibility])

    function handleNavButtonClick (index) {
        setDropDownVisibility(buttons.map((element, i) => {
            if(i === index) return true
            return false
        }))
    }

    const contentElements = content.map((item) => {   
        return(
            <div key={item.id} id={imgdivID} className="mincard-div">
                <img key={item.id} id={imageID} className="minicard-img" src={item.image} ></img>
            </div>
            )
    })

    const navbarButtons = buttons.map((button, index) => {
        return (<DropDown buttonInfo={button} currentIndex={index} handleNavButtonClick={() => handleNavButtonClick(index)} visibility={dropDownVisibility} key={button.id}/>)
    })


    return (
        <div className="hub">
            <h1 className="hub-header">{text}</h1>
            <span id={spanID} className="hub-span"></span>
            <div id={navbarID} className="navbar">
                {navbarButtons}
            </div>
            <div id={divID} className="items-container">
                {contentElements}
            </div>
        </div>
    )
}

export default Hub