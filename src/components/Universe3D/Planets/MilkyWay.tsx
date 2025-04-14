import { useTexture } from "@react-three/drei";

import milkyWayImg from "../../../assets/bgMilkyWay.jpg";

const MilkyWayBackground = () => {
  const texture = useTexture(milkyWayImg);

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[550, 64, 64]} />
      <meshBasicMaterial map={texture} side={2} />{" "}
    </mesh>
  );
};

export default MilkyWayBackground;
