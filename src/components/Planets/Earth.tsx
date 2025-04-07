import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import EarthImg from "../../assets/earth.jpg";
import moonImg from "../../assets/moon.jpg";

const Earth = () => {
  const EarthTexture = useTexture(EarthImg);
  const EarthRef = useRef();
  const moonRef = useRef();

  useFrame(({ clock }) => {
    if (EarthRef.current) {
      EarthRef.current.rotation.y += 0.01;
    }
    if (moonRef.current) {
      const time = clock.getElapsedTime();
      const radius = 0.7;
      moonRef.current.position.x = Math.cos(time * 0.5) * radius;
      moonRef.current.position.z = Math.sin(time * 0.5) * radius;
    }
  });

  return (
    <>
      <mesh ref={EarthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={EarthTexture}
          emissiveMap={EarthTexture}
          emissiveIntensity={2}
        />
      </mesh>

      <mesh ref={moonRef} position={[0.4, 0, 0]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial
          map={useTexture(moonImg)}
          emissiveMap={useTexture(moonImg)}
          emissiveIntensity={1}
        />
      </mesh>
    </>
  );
};

export default Earth;
