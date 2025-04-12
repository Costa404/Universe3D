import { useTexture } from "@react-three/drei";
import AlienStarImg from "../../../assets/AlienSun.jpg";

const AlienStar = () => {
  const AlienStarTexture = useTexture(AlienStarImg);
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={AlienStarTexture}
        emissiveMap={AlienStarTexture}
        emissiveIntensity={2}
      />
    </mesh>
  );
};

export default AlienStar;
