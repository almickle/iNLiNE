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

    const { hub, imgdivID, imageID, spanID, divID, navbarID, text } = infoObject

    console.log(hub)
    
    const [dropDownVisibility, setDropDownVisibility] = useState({collection: false, sort: false, filter: false})
    const [hubInfo, setHubInfo] = useState({[hub]:[]})

    useEffect(() => {
    fetch("http://localhost:3000/hubinfo")
    .then(resp => resp.json())
    .then(data => setHubInfo(data))
    }, [])

    useEffect(() => {console.log(hubInfo)}, [hubInfo])

    const content = hubInfo[hub]

    useEffect(() => {
        for (const key in dropDownVisibility) {
            if(dropDownVisibility[key] === true) {
                document.getElementById(key).style.height = "fit-content"
            } else {
                document.getElementById(key).style.height = "70%"
            }
        }
    }, [dropDownVisibility])

    function handleCollectionClick() {
        setDropDownVisibility({collection: true, sort: false, filter: false})
    }

    function handleSortClick() {
        setDropDownVisibility({collection: false, sort: true, filter: false})
    }

    function handleFilterClick() {
        setDropDownVisibility({collection: false, sort: false, filter: true})
    }

    const contentElements = content.map((item) => {   
        return(
            <div key={item.id} id={imgdivID} className="mincard-div">
                <img key={item.id} id={imageID} className="minicard-img" src={item.image}></img>
            </div>
            )
    })

    const collectionInfo = {
        id: "collection",
        class: "nav-button",
        text: "Collections",
        tabs: ["ALYX", "Dior", "Catabran", "Elexia"]
    }

    const sortInfo = {
        id: "sort",
        class: "nav-button",
        text: "Sort",
        tabs: ["Price", "Trend"]
    }

    const filterInfo = {
        id: "filter",
        class: "nav-button",
        text: "Filter",
        tabs: ["Gender", "Designer", "Type"]
    }

    return (
        <div className="hub">
            <h1 className="hub-header">{text}</h1>
            <span id={spanID} className="hub-span"></span>
            <div id={navbarID} className="navbar">
                <DropDown buttonInfo={collectionInfo} handleCollectionClick={handleCollectionClick} visibility={dropDownVisibility} />
                <DropDown buttonInfo={filterInfo} handleCollectionClick={handleFilterClick} visibility={dropDownVisibility} />
                <DropDown buttonInfo={sortInfo} handleCollectionClick={handleSortClick} visibility={dropDownVisibility} />
            </div>
            <div id={divID} className="items-container">
                {contentElements}
            </div>
        </div>
    )
}

export default Hub