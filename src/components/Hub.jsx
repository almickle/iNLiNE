import React, {useState, useEffect} from "react";

// stylesheet imports
import "./style/hubs/hub.css"
import "./style/hubs/nfthub.css"
import "./style/hubs/clothinghub.css"
import "./style/hubs/planthub.css"
import "./style/buttons/dropdown.css"

// component imports
import DropDown from "./DropDown";
import ModelViewer from "./ModelViewer";

// Babylon imports
import { Vector3, HemisphericLight, SceneLoader, AxesViewer, MeshBuilder, Material, Color3, Curve3, Path3D, UniversalCamera, Quaternion, Animation, Mesh, ArcRotateCamera } from "@babylonjs/core";
import "@babylonjs/core";
import "@babylonjs/loaders"
import "@babylonjs/materials"


// component function
function Hub({ infoObject, handleCardClick, handleHomeClick }) {

    const { hub, imgdivID, imageID, spanID, divID, navbarID, text, buttons } = infoObject
    
    const [dropDownVisibility, setDropDownVisibility] = useState(buttons.map((button) => button = false))
    const [hubInfo, setHubInfo] = useState({[hub]:[]})
    const [displayItems, setDisplayItems] = useState([])

    const content = hubInfo[hub]

    useEffect(() => {
        fetch("http://localhost:3000/hubinfo")
        .then(resp => resp.json())
        .then(data => setHubInfo(data))
    }, [])

    useEffect(() => {
        setDisplayItems(content.map((item) => {   
            return(
                <div key={item.id} id={imgdivID} className="mincard-div" onClick={() => handleCardClick(item)}>
                    <div className="hoverinfo-div" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <span id="like-button" onClick={handleLike}>&#x2661;</span>
                        <div id="hovertext-div"onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <p id="minicard-name" className="minicard-info">{item.name}</p>
                            <p id="minicard-collection" className="minicard-info">collection: {item.collection}</p>
                            <p id="minicard-price" className="minicard-info">${item.price}</p>
                        </div>
                    </div>
                    <img key={item.id} id={imageID} className="minicard-img" src={item.image}></img>
                </div>
                )
        }))
    }, [hubInfo])

    useEffect(() => {
        buttons.forEach(button => {
            document.getElementById(button.id).style.height = "70%"
        })
        if(dropDownVisibility.find((value => value === true))) {
            const elementID = buttons[dropDownVisibility.findIndex((value) => value === true)].id
            document.getElementById(elementID).style.height = "fit-content"
        }
    }, [dropDownVisibility])


    function handleMouseOver (event) {
        if (event.target.className === "hoverinfo-div"){
            event.target.style.backgroundColor = "white"
            event.target.style.opacity = "70%"
        }
    }

    function handleMouseOut (event) {
        if (event.target.className === "hoverinfo-div"){
            event.target.style.backgroundColor = "none"
            event.target.style.opacity = "0%"
        }
    }

    function handleLike (event) {
        const likeButton = event.target
        if(likeButton.style.backgroundColor === "white") {
            likeButton.style.backgroundColor = "red"
        }
        if(likeButton.style.backgroundColor === "red") {
            likeButton.style.backgroundColor = "white"
        }
    }

    function handleNavButtonClick (index) {
        setDropDownVisibility(buttons.map((element, i) => {
            if(i === index) return true
            return false
        }))
    }

    const onSceneReady = (scene, mesh) => {

        scene.clearColor = new Color3(1, 1, 1)

        const canvas = scene.getEngine().getRenderingCanvas();
        const camera = new ArcRotateCamera("modelcamera", 1, 0, 1.5, new Vector3(0, 0, 0), scene);
              camera.panningAxis = new Vector3(1, 0, 0)
              camera.attachControl(canvas, true);

        const light = new HemisphericLight("modellight", new Vector3(0, 100, 30), scene);
              light.intensity = 0.7;

          SceneLoader.ImportMesh("", "./assets/", mesh, scene, (mesh) => {

        })
    }

    const onRender = (scene) => {
        
    };

    function handleDropDownClick (event, currentIndex) {
        switch (currentIndex) {
            case 0:
                const filteredItems = content.filter((item) => item.collection === event.target.textContent)
                setDisplayItems(filteredItems.map((item) => {
                    if(item.collection === "Catabran") 
                        {return(
                            <div key={item.id} id={imgdivID} className="model-div">
                                <ModelViewer antialias onSceneReady={(scene) => onSceneReady(scene, item.image)} onRender={onRender}/>
                            </div>
                            ) } else 
                    {return(
                        <div key={item.id} id={imgdivID} className="mincard-div" onClick={() => handleCardClick(item)}>
                            <div className="hoverinfo-div" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                <span id="like-button" onClick={handleLike}>&#x2661;</span>
                                <div id="hovertext-div"onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                    <p id="minicard-name" className="minicard-info">{item.name}</p>
                                    <p id="minicard-collection" className="minicard-info">collection: {item.collection}</p>
                                    <p id="minicard-price" className="minicard-info">${item.price}</p>
                                </div>
                            </div>
                            <img key={item.id} id={imageID} className="minicard-img" src={item.image}></img>
                        </div>
                        )}
                }))
                break
            case 1:
                break
            case 2:
                break
            case 3:
                break
        }
    }

    const navbarButtons = buttons.map((button, index) => {
        return (<DropDown buttonInfo={button} currentIndex={index} visibility={dropDownVisibility} handleNavButtonClick={() => handleNavButtonClick(index)} handleDropDownClick={handleDropDownClick} key={button.id}/>)
    })


    return (
        <div id={hub} className="hub">
            <h1 className="hub-header" onClick={handleHomeClick}>{text}</h1>
            <span id={spanID} className="hub-span"></span>
            <div id={navbarID} className="navbar">
                {navbarButtons}
            </div>
            <div id={divID} className="items-container">
                {displayItems}
            </div>
        </div>
    )
}

export default Hub