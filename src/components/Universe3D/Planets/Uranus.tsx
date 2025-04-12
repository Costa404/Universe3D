import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import UranusImg from "../../../assets/uranus.jpg";
import * as THREE from "three";

const Uranus = () => {
  const UranusTexture = useTexture(UranusImg);
  const UranusRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (UranusRef.current) {
      UranusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={UranusRef}>
      <sphereGeometry args={[0.4, 64, 64]} />
      <meshStandardMaterial
        map={UranusTexture}
        emissiveMap={UranusTexture}
        emissiveIntensity={2}
      />
    </mesh>
  );
};

export default Uranus;
