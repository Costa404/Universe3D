import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import MilkyWayBackground from "./Planets/MilkyWay";
import { CameraSystem } from "./Spaceship/CameraSystem.tsx";
import { Lights } from "./SolarSystem/Lights";
import { OrbitToggleButton } from "./SolarSystem/BtnHomepage.tsx";
import { StarSystem } from "./SolarSystem/StartSystem";
import LaunchSpaceship from "./Spaceship/LaunchSpaceship/LaunchSpaceship";

const UniverseContent = () => {
  return (
    <>
      <MilkyWayBackground />
      <Lights />
      <CameraSystem />
      <StarSystem />
      <LaunchSpaceship />
      <OrbitToggleButton />
    </>
  );
};

const Universe3D = () => {
  return (
    <div className="bg-danger">
      <Canvas style={{ width: "100%", height: "100vh" }}>
        <UniverseContent />
      </Canvas>
    </div>
  );
};

export default Universe3D;
