import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import MilkyWayBackground from "./Planets/MilkyWay";
import { CameraSystem, CameraSystemHandle } from "./SolarSystem/CameraSystem";
import { Lights } from "./SolarSystem/Lights";
import { OrbitToggleButton } from "./SolarSystem/OrbitToggleButton";
import { StarSystem } from "./SolarSystem/StartSystem";
import LaunchSpaceship from "../LaunchSpaceship/LaunchSpaceship";
import { Html } from "@react-three/drei";

const UniverseContent = () => {
  const [showOrbits, setShowOrbits] = useState(true);
  const cameraSystemRef = useRef<CameraSystemHandle>(null);

  return (
    <>
      <MilkyWayBackground />
      <Lights />
      <CameraSystem ref={cameraSystemRef} />
      <StarSystem showOrbits={showOrbits} />
      <LaunchSpaceship />
      <OrbitToggleButton
        showOrbits={showOrbits}
        setShowOrbits={setShowOrbits}
      />
      <Html>
        {/* Adicione botões para controlar a câmera */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 100,
          }}
        >
          <button onClick={() => cameraSystemRef.current?.focusOnSun()}>
            Ver Sol
          </button>
          <button onClick={() => cameraSystemRef.current?.focusOnSpaceship()}>
            Ver Nave
          </button>
        </div>
      </Html>
    </>
  );
};

const Universe3D = () => {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <UniverseContent />
    </Canvas>
  );
};

export default Universe3D;
