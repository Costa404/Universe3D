import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitingPlanetProps } from "./types";
import * as THREE from "three";

const OrbitingPlanet = ({
  targetPosition,
  radius = 8,
  speed = 0.5,
  children,
  onClick,
}: OrbitingPlanetProps) => {
  const planetRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * speed;
    if (planetRef.current) {
      planetRef.current.position.x =
        targetPosition[0] + Math.cos(time) * radius;
      planetRef.current.position.z =
        targetPosition[2] + Math.sin(time) * radius;
      planetRef.current.position.y = targetPosition[1];
    }
  });

  return (
    <group ref={planetRef} onClick={onClick}>
      {children}
    </group>
  );
};

export default OrbitingPlanet;
