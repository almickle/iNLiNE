import React, { useEffect, useState } from "react";

// component imports
import ModelViewer from "./ModelViewer";

// stylesheet imports
import "./style/hubs/home.css"
import "./style/modelviewer.css"

// babylon imports
import "@babylonjs/core";
import "@babylonjs/loaders"
import "@babylonjs/materials"
import { Color3 } from "@babylonjs/core";


// component function
export default ({onLiveShop}) => {  

    const [favorites, setFavorites] = useState([{id: "1", image: "URL"}])

    useEffect(() => {
        fetch("http://localhost:3000/clothing")
        .then(resp => resp.json())
        .then(data => {
            setFavorites(data)})
    }, [])

    const iconElements = favorites.map((element) => {
        return <img key={element.id} src={element.image} className="liked-icons" />
    })

    const onSceneReady = (scene) => {
        scene.clearColor = new Color3(1, 1, 1)
    }

    const onRender = (scene) => {

    };
    

    return (
            <div id="home">
                <h1 id="main-header">iNLiNE</h1>
                <span id="linebreak"></span>
                <div id="fav-list">
                    <h1 id="fav-header">Wish List</h1>
                    {iconElements}
                </div>
                <ModelViewer antialias onSceneReady={onSceneReady} onRender={onRender} id="modelViewer"/>
                <span id="liveshop" onClick={onLiveShop}>LiveShop</span>
            </div>

    )
}

// data-heading="i"