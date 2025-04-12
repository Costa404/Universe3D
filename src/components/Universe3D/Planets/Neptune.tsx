import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import NeptuneImg from "../../../assets/neptune.jpg";
import * as THREE from "three";

const Neptune = () => {
  const NeptuneTexture = useTexture(NeptuneImg);
  const NeptuneRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (NeptuneRef.current) {
      NeptuneRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={NeptuneRef}>
      <sphereGeometry args={[0.38, 64, 64]} />
      <meshStandardMaterial
        map={NeptuneTexture}
        emissiveMap={NeptuneTexture}
        emissiveIntensity={2}
      />
    </mesh>
  );
};

export default Neptune;
