import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import jupiterImg from "../../../assets/jupiter.jpg";
import * as THREE from "three";

const Jupiter = () => {
  const jupiterTexture = useTexture(jupiterImg);
  const jupiterRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (jupiterRef.current) {
      jupiterRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={jupiterRef}>
      <sphereGeometry args={[0.9, 64, 64]} />
      <meshStandardMaterial
        map={jupiterTexture}
        emissiveMap={jupiterTexture}
        emissiveIntensity={2}
      />
    </mesh>
  );
};

export default Jupiter;
