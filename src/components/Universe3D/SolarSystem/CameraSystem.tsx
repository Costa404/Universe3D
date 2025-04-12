import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type CameraTarget = {
  position: [number, number, number];
  lookAt: [number, number, number];
};

type CameraControllerProps = {
  cameraTarget: CameraTarget;
  onAnimationComplete?: () => void;
};

const CameraController = ({
  cameraTarget,
  onAnimationComplete,
}: CameraControllerProps) => {
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

export type CameraSystemHandle = {
  focusOnSpaceship: () => void;
  focusOnSun: () => void;
};

export const CameraSystem = forwardRef<CameraSystemHandle>((props, ref) => {
  const [cameraTarget, setCameraTarget] = useState<CameraTarget | null>(null);
  const [enableOrbitControls, setEnableOrbitControls] = useState(true);
  const orbitControlsRef = useRef<any>(null);

  const handleAnimationComplete = () => {
    setEnableOrbitControls(true);
    setCameraTarget(null);
  };

  const focusOnSpaceship = () => {
    setEnableOrbitControls(false);
    setCameraTarget({
      position: [0, 100, -300],
      lookAt: [0, 0, 0],
    });
  };

  const focusOnSun = () => {
    setEnableOrbitControls(false);
    setCameraTarget({
      position: [0, 40, 40],
      lookAt: [0, 0, 0],
    });
  };

  useImperativeHandle(ref, () => ({
    focusOnSpaceship,
    focusOnSun,
  }));

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
});
