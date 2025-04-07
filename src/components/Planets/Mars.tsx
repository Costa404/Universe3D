import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import MarsImg from "../../assets/mars.jpg";

const Mars = () => {
  const MarsTexture = useTexture(MarsImg);
  const MarsRef = useRef();

  useFrame(() => {
    if (MarsRef.current) {
      MarsRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={MarsRef}>
      <sphereGeometry args={[0.16, 64, 64]} />
      <meshStandardMaterial
        map={MarsTexture}
        emissiveMap={MarsTexture}
        emissiveIntensity={2}
      />
    </mesh>
  );
};

export default Mars;
