// CameraSystem.tsx
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useCameraStore } from "./LaunchSpaceship/useCameraStore";
import { useRef } from "react";

export const CameraSystem = () => {
  const orbitControlsRef = useRef<any>(null);
  const { camera } = useThree();
  const { target, cameraOffset } = useCameraStore();

  const positionSmoothing = 0.1;
  const targetSmoothing = 0.1;

  useFrame(() => {
    if (target && orbitControlsRef.current) {
      const desiredPosition = target.position.clone().add(cameraOffset);
      const desiredTarget = target.position.clone();

      camera.position.lerp(desiredPosition, positionSmoothing);

      orbitControlsRef.current.target.lerp(desiredTarget, targetSmoothing);
      orbitControlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={5}
      maxDistance={50}
    />
  );
};
