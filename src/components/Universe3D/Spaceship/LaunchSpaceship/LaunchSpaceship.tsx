import { useGLTF } from "@react-three/drei";
import { useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import * as THREE from "three";
import spaceShip from "../../../../assets/Spaceship.glb";
import { useFrame } from "@react-three/fiber";
import { useCameraStore } from "./useCameraStore";

const LaunchSpaceship = forwardRef((props, ref) => {
  const { scene } = useGLTF(spaceShip);
  const spaceshipRef = useRef<THREE.Object3D>();
  const velocity = useRef(new THREE.Vector3(0, 0, 0));
  const speed = 1;
  const { setTarget } = useCameraStore();

  useEffect(() => {
    if (spaceshipRef.current) {
      spaceshipRef.current.add(scene.clone());
      setTarget(spaceshipRef.current);
    }
  }, [scene, setTarget]);

  // Expõe a referência da nave para o componente pai
  useImperativeHandle(ref, () => ({
    getObject: () => spaceshipRef.current,
  }));

  useFrame(() => {
    if (!spaceshipRef.current) return;

    // Atualiza a posição baseada na velocidade
    spaceshipRef.current.position.add(velocity.current);

    // Rotação durante o movimento
    if (velocity.current.z !== 0) {
      spaceshipRef.current.rotation.y = Math.PI; // Ajuste conforme seu modelo
    }
  });

  // Controles de teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          velocity.current.z = -speed;
          break;
        case "ArrowDown":
          velocity.current.z = speed;
          break;
        case "ArrowLeft":
          velocity.current.x = -speed;
          break;
        case "ArrowRight":
          velocity.current.x = speed;
          break;
      }
    };

    const handleKeyUp = () => {
      velocity.current.set(0, 0, 0);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <primitive
      ref={spaceshipRef}
      object={scene}
      scale={0.0009}
      position={[0, 0, 0]}
    />
  );
});

export default LaunchSpaceship;
