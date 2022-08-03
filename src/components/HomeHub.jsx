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
import { ArcRotateCamera, Color3, FreeCamera, HemisphericLight, SceneLoader, TargetCamera, Vector3 } from "@babylonjs/core";


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
        const canvas = scene.getEngine().getRenderingCanvas();
        const camera = new ArcRotateCamera("modelcamera", 1, 0, 10, new Vector3(0, 0, 0), scene);
              camera.panningAxis = new Vector3(1, 0, 0)
              camera.attachControl(canvas, true);
  const light = new HemisphericLight("light", new Vector3(0, 100, 30), scene);
        light.intensity = 0.7;
        scene.clearColor = new Color3(1, 1, 1)

          SceneLoader.ImportMesh("", "./assets/", "Simple_Man_BLEND.gltf", scene, (mesh) => {
      
        })
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