import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import VenusImg from "../../assets/venus.jpg";

const Venus = () => {
  const VenusTexture = useTexture(VenusImg);
  const VenusRef = useRef();

  useFrame(() => {
    if (VenusRef.current) {
      VenusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={VenusRef}>
      <sphereGeometry args={[0.4, 64, 64]} />
      <meshStandardMaterial
        map={VenusTexture}
        emissiveMap={VenusTexture}
        emissiveIntensity={2}
      />
    </mesh>
  );
};

export default Venus;
