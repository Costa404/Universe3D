import { useTexture } from "@react-three/drei";

import milkyWayImg from "../../../assets/bgMilkyWay.jpg";

const MilkyWayBackground = () => {
  const texture = useTexture(milkyWayImg);

  return (
    <mesh scale={[-1, 1, 1]}>
      {" "}
      {/* Inverte a esfera para ser visível por dentro */}
      <sphereGeometry args={[900, 64, 64]} /> {/* Esfera grande */}
      <meshBasicMaterial map={texture} side={2} />{" "}
    </mesh>
  );
};

export default MilkyWayBackground;
