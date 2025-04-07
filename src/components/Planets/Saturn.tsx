import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import saturnImg from "../../assets/saturn.jpg";
import saturnRings from "../../assets/saturnRings.png";

const Saturn = () => {
  const saturnTexture = useTexture(saturnImg);
  const saturnRingsTexture = useTexture(saturnRings);
  const saturnRef = useRef();
  const ringsRef = useRef();

  useFrame(() => {
    if (saturnRef.current) {
      saturnRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <mesh ref={saturnRef}>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial
          map={saturnTexture}
          emissiveMap={saturnTexture}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Anéis de Saturno - Alinhados no plano XZ (equador) */}
      <mesh ref={ringsRef} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[0.6, 0.8, 64]} />
        <meshStandardMaterial
          map={saturnRingsTexture}
          side={THREE.DoubleSide}
          transparent={true}
          alphaTest={0.1}
          opacity={0.8}
          depthWrite={false}
          emissiveIntensity={0.3}
        />
      </mesh>
    </>
  );
};

export default Saturn;
