import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import MercuryImg from "../../assets/mercury.jpg";

const Mercury = () => {
  const MercuryTexture = useTexture(MercuryImg);
  const MercuryRef = useRef();

  useFrame(() => {
    if (MercuryRef.current) {
      MercuryRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={MercuryRef}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshStandardMaterial
        map={MercuryTexture}
        emissiveMap={MercuryTexture}
        emissiveIntensity={2}
      />
    </mesh>
  );
};

export default Mercury;
