// App.js
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { SolarSystem } from "./components/SolarSystem";
import { CameraSystem } from "./components/CameraSystem";
import MilkyWayBackground from "./components/Planets/MilkyWay";
import { SOLAR_SYSTEMS } from "./components/Hooks/Systems";
const App = () => {
  const [cameraTarget, setCameraTarget] = useState(null);
  const [enableOrbitControls, setEnableOrbitControls] = useState(true);

  const handlePlanetClick = (event) => {
    event.stopPropagation();
    const planetPosition = event.object.position;

    setEnableOrbitControls(false);
    setCameraTarget({
      position: [
        planetPosition.x + 3,
        planetPosition.y + 1,
        planetPosition.z + 3,
      ],
      lookAt: planetPosition.toArray(),
    });
  };

  return (
    <Canvas
      camera={{ position: [30, 15, 30], fov: 50 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <MilkyWayBackground />
      <directionalLight position={[0, 50, 50]} intensity={1} />
      <ambientLight intensity={0.3} />

      <CameraSystem
        cameraTarget={cameraTarget}
        setCameraTarget={setCameraTarget}
        enableOrbitControls={enableOrbitControls}
        setEnableOrbitControls={setEnableOrbitControls}
      />

      {/* Renderiza todos os sistemas solares */}
      {Object.entries(SOLAR_SYSTEMS).map(([name, system]) => (
        <group key={name}>
          <group position={system.centerPosition}>{system.sun}</group>
          <SolarSystem
            centerPosition={system.centerPosition}
            planets={system.planets}
            onPlanetClick={handlePlanetClick}
          />
        </group>
      ))}
    </Canvas>
  );
};

export default App;
