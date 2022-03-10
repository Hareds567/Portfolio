import React, { useEffect, useRef, useCallback, useState, FC } from "react";
import * as THREE from "three";
import * as dat from "dat.gui";

//Textures
import rockImage from "../../Textures/rockTexture.jpg";
import rockHeightImage from "../../Textures/height.png";
import alphaImage from "../../Textures/alpha.png";

//CSS
import "./styles.css";
interface Props {
  homePageIsRendered: boolean;
}
const Container1: FC<Props> = ({ homePageIsRendered }) => {
  let mouseY = 0;
  let mouseX = 0;
  //Texture Loader
  const loader = new THREE.TextureLoader();
  const rockTexture = loader.load(rockImage);
  const rockHeight = loader.load(rockHeightImage);
  const rockAlpha = loader.load(alphaImage);
  //Window Information
  const initialWidth = window.innerWidth;
  const initialHeight = window.innerHeight;

  //Debug
  const gridHelper = new THREE.GridHelper(window.innerWidth, 10);

  //let gui = useRef(new dat.GUI());

  //Three Initialization
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    90,
    initialWidth / initialHeight,
    0.1,
    150
  );
  camera.position.z = 10;
  let tanFOV = Math.tan(((Math.PI / 180) * camera.fov) / 2);

  const clock = new THREE.Clock();
  const renderer = useRef(new THREE.WebGL1Renderer({ alpha: true }));

  //Add to Scene
  //scene.add(gridHelper);

  const appDiv = useCallback(
    //Surround the canvas inside div
    (div: HTMLDivElement) => {
      if (div == null) return;
      const canvas = document.getElementById("city-canvas");
      const guiDiv = document.getElementsByClassName("dg main a");
      if (guiDiv.length > 1) {
        for (var i: number = 0; i < guiDiv.length; i++) {
          if (i !== 1) guiDiv[i].remove();
        }
      }
      canvas?.remove();
      //guiDiv?.remove();
      //guiDivPlane?.remove();

      renderer.current.setSize(initialWidth, initialHeight); //Build Renderers
      renderer.current.domElement.id = "city-canvas"; //Add Rendered inside
      div.appendChild(renderer.current.domElement);
    },
    [renderer]
  );
  //========================		OBJECTS	(START)		=========================

  //========= Cube
  const cubeGeometry = new THREE.BoxGeometry(2, 2, 2); //Object
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //Material
  const cube = new THREE.Mesh(cubeGeometry, material); //Create Mesh
  //scene.add(cube); //Add cube to the scene
  //Animation and Rendering  of the Cube
  const animateCube = () => {
    requestAnimationFrame(animateCube);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.current.render(scene, camera);
  };
  animateCube();

  //=========	Plane
  const xGeometry = new THREE.PlaneBufferGeometry(20, 20, 64, 64);
  const xMaterial = new THREE.MeshStandardMaterial({
    color: "white",
    map: rockTexture,
    displacementMap: rockHeight,
    displacementScale: 3.5,
    alphaMap: rockAlpha,
    transparent: true,
    depthTest: false,
  });
  const xMesh = new THREE.Mesh(xGeometry, xMaterial);
  xMesh.rotation.x = 30;
  xMesh.position.set(0, -2, 1);
  //scene.add(xMesh);
  //gui.current.add(xMesh.rotation, "x").min(0).max(200);

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    xMesh.rotation.z = 0.08 * elapsedTime;
    //	xMesh.material.displacementScale = mouseY * 0.005;
    window.requestAnimationFrame(tick);
  };
  tick();

  //=========	Sphere
  const sphereGeometry = new THREE.TorusGeometry(6, 1.5, 15, 100);
  const sphereMaterial = new THREE.PointsMaterial({
    size: 0.00005,
  });
  const sphere = new THREE.Points(sphereGeometry, sphereMaterial);
  //scene.add(sphere);

  const sphereAnimation = () => {
    const elapsedTime = clock.getElapsedTime();
    sphere.rotation.y = 0.3 * elapsedTime;
    renderer.current.render(scene, camera);
    requestAnimationFrame(sphereAnimation);
  };
  //sphereAnimation();

  //========= Particles
  const particleGeometry = new THREE.BufferGeometry();
  const particleMaterial = new THREE.PointsMaterial({
    size: 0.00005,
  });
  const particleNum = 9000;
  const positionArray = new Float32Array(particleNum * 3);
  for (let i = 0; i < positionArray.length - 1; i++) {
    positionArray[i] = (Math.random() - 0.5) * 500;
  }
  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positionArray, 3)
  );
  const particle = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particle);

  const particleAnimation = () => {
    const elapsedTime = clock.getElapsedTime();
    particle.rotation.y = elapsedTime * 0.003;
    // particle.rotation.x = elapsedTime * 0.003;
    particle.rotation.z = elapsedTime * 0.003;
    requestAnimationFrame(particleAnimation);
  };
  particleAnimation();
  //========================		OBJECTS	(END)		========================

  //========================		LIGHTS (START)	 	=========================
  const firstLight = new THREE.PointLight("#ffffff", 1.5, 100);
  firstLight.position.set(-9.5, 3, 4);
  scene.add(firstLight);
  const firstLightHelper = new THREE.PointLightHelper(firstLight);
  //scene.add(firstLightHelper);

  //const color = { color: "#00ff00" };
  // gui.current.addColor(color, "color").onChange(() => {
  // 	firstLight.color.set(color.color);
  // });
  // gui.current.add(firstLight.position, "x");
  // gui.current.add(firstLight.position, "y");
  // gui.current.add(firstLight.position, "z");

  //========================		LIGHTS (END)			========================

  //========================		USE EFFECT (START)	 	========================
  //Update the dimensions of the Renderer
  const updateWindowDimensions = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.fov =
      (360 / Math.PI) *
      Math.atan(tanFOV * (window.innerHeight / initialHeight));
    camera.updateProjectionMatrix();
    camera.lookAt(scene.position);
    renderer.current.setSize(window.innerWidth, window.innerHeight);
  };

  const animateTerrain = (event: MouseEvent) => {
    mouseY = event.clientY;
    mouseX = event.clientX;
  };

  //Update elements as the Size of Window changes
  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    window.addEventListener("mousemove", animateTerrain);
  });

  return (
    <div>
      <div className="homepage-container1" ref={appDiv}>
        {/* <Header /> */}
        <div
          className={`${
            homePageIsRendered
              ? "Welcome-message-wasRendered"
              : "Welcome-message"
          }`}
        >
          <h1>Hello, My name is Justin.</h1>
          <p>Welcome to my website!</p>
        </div>
      </div>
    </div>
  );
};

export default Container1;
