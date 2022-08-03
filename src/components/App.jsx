import React, { useState } from "react";

// Babylon imports
import { FreeCamera, Vector3, HemisphericLight, SceneLoader, AxesViewer, MeshBuilder, Material, Color3 } from "@babylonjs/core";
import SceneComponent from "./SceneComponent";
import { SkyMaterial } from "@babylonjs/materials";
import "@babylonjs/core";
import "@babylonjs/loaders"
import "@babylonjs/materials"

// component imports
import Gui from "./Gui";

// stylesheet imports
import "./style/canvas.css";


// App Component
function App() {

const [isIntro, setIsIntro] = useState(true)

  
// Function: scene config
const onSceneReady = (scene) => {

  scene.clearColor = new Color3(1, 1, 1)
  const skyMaterial = new SkyMaterial("skyMat", scene)
        skyMaterial.backFaceCulling = false
        skyMaterial.inclination = 0.1
        skyMaterial.azimuth = 0.5

if(isIntro === false) {
  const skyBox = MeshBuilder.CreateBox("skyBox", {size: 1000}, scene)
        skyBox.material = skyMaterial
}

  // Gets reference to the canvas 
  const canvas = scene.getEngine().getRenderingCanvas();

  // Creates and positions the camera 
  const camera = new FreeCamera("camera1", new Vector3(0, 2, 0), scene);
        // Attaches the camera to the canvas
        camera.attachControl(canvas, true);
        // Points the camera towards the scene origin
        camera.setTarget(new Vector3(-10, 2, -5));

  // Create light and set intensity
  const light = new HemisphericLight("light", new Vector3(0, 100, 30), scene);
        light.intensity = 0.7;

  // Create axes
  const axes = new AxesViewer(scene, 1000, 2, null, null, null, 0.005)
        axes.dispose()

  // Create grid
  const grid = MeshBuilder.CreateGround("grid", {width: 1000, height: 1000})
        //grid.material = new GridMaterial("gridmaterial", scene)
  
//   // Load and position mesh
//   SceneLoader.ImportMesh("", "./assets/", "Warehouse.gltf", scene, (mesh) => {
      
//   })

};


// Function: will run on every frame
const onRender = (scene) => {

};

return (
  <div>
    <Gui id="guiComponent" />
    <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id="renderCanvas"/>
  </div>
)

}

export default App