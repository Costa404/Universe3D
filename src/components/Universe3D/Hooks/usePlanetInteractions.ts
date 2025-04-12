import { useState } from "react";
import * as THREE from "three";

type CameraTarget = {
  position: [number, number, number];
  lookAt: [number, number, number];
};

export const usePlanetInteractions = () => {
  const [_, setCameraTarget] = useState<CameraTarget | null>(null);
  const [__, setEnableOrbitControls] = useState(true);

  const handlePlanetClick = (event: THREE.Event) => {
    event.stopPropagation();
    const object = event.object as THREE.Mesh;
    const planetPosition = object.position;

    setEnableOrbitControls(false);
    setCameraTarget({
      position: [
        planetPosition.x + 3,
        planetPosition.y + 1,
        planetPosition.z + 3,
      ],
      lookAt: planetPosition.toArray() as [number, number, number],
    });
  };

  return { handlePlanetClick };
};
