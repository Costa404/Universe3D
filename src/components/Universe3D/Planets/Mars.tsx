import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import MarsImg from "../../../assets/mars.jpg";
import * as THREE from "three";

const Mars = () => {
  const MarsTexture = useTexture(MarsImg);
  const MarsRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (MarsRef.current) {
      MarsRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={MarsRef}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshStandardMaterial
        map={MarsTexture}
        emissiveMap={MarsTexture}
        emissiveIntensity={2}
      />
    </mesh>
  );
};

export default Mars;
