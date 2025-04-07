import { useTexture } from "@react-three/drei";
import sunImg from "../../assets/sun.jpg";

const Sun = () => {
  const SunTexture = useTexture(sunImg);
  return (
    <mesh>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial
        map={SunTexture}
        emissiveMap={SunTexture}
        emissiveIntensity={2}
      />
    </mesh>
  );
};

export default Sun;
