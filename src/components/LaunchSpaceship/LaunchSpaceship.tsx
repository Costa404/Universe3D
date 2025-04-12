import { useGLTF, OrbitControls } from "@react-three/drei";
import spaceShip from "../../assets/Spaceship.glb";

const LaunchSpaceship = () => {
  const { scene } = useGLTF(spaceShip);
  return (
    <>
      <primitive object={scene} scale={0.1} position={[0, 0, -200]} />
    </>
  );
};

export default LaunchSpaceship;
