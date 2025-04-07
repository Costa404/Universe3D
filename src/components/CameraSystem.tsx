import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CameraController = ({ cameraTarget, onAnimationComplete }) => {
  useFrame(({ camera }) => {
    if (cameraTarget) {
      const targetPos = new THREE.Vector3(...cameraTarget.position);
      const lookAtPos = new THREE.Vector3(...cameraTarget.lookAt);

      camera.position.lerp(targetPos, 0.05);
      camera.lookAt(lookAtPos);

      if (camera.position.distanceTo(targetPos) < 0.1) {
        onAnimationComplete?.();
      }
    }
  });
  return null;
};

export const CameraSystem = () => {
  const [cameraTarget, setCameraTarget] = useState(null);
  const [enableOrbitControls, setEnableOrbitControls] = useState(true);
  const orbitControlsRef = useRef();

  const handleAnimationComplete = () => {
    setEnableOrbitControls(true);
    setCameraTarget(null);
  };

  return (
    <>
      {cameraTarget && (
        <CameraController
          cameraTarget={cameraTarget}
          onAnimationComplete={handleAnimationComplete}
        />
      )}
      <OrbitControls
        ref={orbitControlsRef}
        enabled={enableOrbitControls}
        minDistance={3}
        maxDistance={50}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
      />
    </>
  );
};
