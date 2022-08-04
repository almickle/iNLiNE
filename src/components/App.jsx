import React, { useState, useEffect } from "react";

// Babylon imports
import { Vector3, HemisphericLight, SceneLoader, AxesViewer, MeshBuilder, Material, Color3, Curve3, Path3D, UniversalCamera, Quaternion, Animation, Mesh } from "@babylonjs/core";
import SceneComponent from "./SceneComponent";
import { GridMaterial, SkyMaterial } from "@babylonjs/materials";
import "@babylonjs/core";
import "@babylonjs/loaders"
import "@babylonjs/materials"

// component imports
import Gui from "./Gui";

// stylesheet imports
import "./style/canvas.css";


// App Component
function App() {


// Function: scene config
const onSceneReady = (scene) => {

// Gets reference to the canvas 
const canvas = scene.getEngine().getRenderingCanvas();

// set background color
  scene.clearColor = new Color3(1, 1, 1)

const skyMaterial = new SkyMaterial("skyMat", scene)
      skyMaterial.backFaceCulling = false
      skyMaterial.inclination = 0.1
      skyMaterial.azimuth = 0.5
const skyBox = MeshBuilder.CreateBox("skyBox", {size: 1000}, scene)
      skyBox.material = skyMaterial

  // Create light and set intensity
  const light = new HemisphericLight("light", new Vector3(0, 100, 30), scene);
        light.intensity = 0.7;

  // Create grid
  const grid = MeshBuilder.CreateGroundFromHeightMap("heightmap", "https://1.bp.blogspot.com/-BNjSPg6C2SU/YRbYuks-I8I/AAAAAAAAf2I/f0NgDQcOz4UwG0hvYylq_Oy9oI5GotXZQCLcBGAsYHQ/s1081/snowdon.png", {width: 1000, height: 1000, subdivisions: 100, minHeight: -100, maxHeight: 10}, scene, false)
        grid.material = new GridMaterial("gridmaterial", scene)

 // Catmull-Rom spline
  const splinePoints = [new Vector3(82, -28, -144)]
  const scale = 10
  const length = 10

  for (let i = 0; i < length; i++) {
    splinePoints.push(new Vector3(Math.abs(i * Math.random()* scale), Math.abs(i * Math.random() * scale/5 + 2), Math.abs(i * Math.random() * scale)))
  }
    splinePoints.push(new Vector3(5, 4, 2))

  const myCurve = Curve3.CreateCatmullRomSpline(splinePoints, 20, true)
  const myPath = new Path3D(myCurve.getPoints())
  const tangents = myPath.getTangents()
  const normals = myPath.getNormals()
  const binormals = myPath.getBinormals()
  const curvePath = myPath.getCurve()

//   MeshBuilder.CreateLines("spline", {points: myCurve.getPoints()}, scene)

  // camera definition
  const camera = new UniversalCamera("dollycamera", new Vector3(82, -28, -144), scene);
  camera.attachControl(canvas, true);
  camera.setTarget(new Vector3(-82, -20, 144))
  camera.updateUpVectorFromRotation = true;


function runCameraPath(scene) {

      const frameRate = 60;
      const posAnim = new Animation("cameraPos", "position", frameRate, Animation.ANIMATIONTYPE_VECTOR3);
      const posKeys = [];
      const rotAnim = new Animation("cameraRot", "rotationQuaternion", frameRate, Animation.ANIMATIONTYPE_QUATERNION);
      const rotKeys = [];

      for (let i = 0; i < curvePath.length; i++) {
            const position = curvePath[i];
            const tangent = tangents[i];
            const binormal = binormals[i];
            const rotation = Quaternion.FromLookDirectionRH(tangent, binormal);

            posKeys.push({frame: i * frameRate, value: position});
            rotKeys.push({frame: i * frameRate, value: rotation});
      }

      posAnim.setKeys(posKeys);
      rotAnim.setKeys(rotKeys);

      camera.animations.push(posAnim);
      camera.animations.push(rotAnim);

      scene.activeCamera = camera;
      scene.beginAnimation(camera, 0, frameRate*curvePath.length, true);
  
}

//runCameraPath(scene)

  
  // Load and position mesh // issue**
  SceneLoader.ImportMesh("", "./assets/", "CharacterModel.gltf", scene, (mesh) => {
      
  })

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