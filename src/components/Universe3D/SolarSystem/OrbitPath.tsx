import * as THREE from "three";
import { useMemo } from "react";

const OrbitPath = ({ radius = 5 }) => {
  const points = useMemo(() => {
    const segments = 64;
    const orbitPoints = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      orbitPoints.push(
        new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
      );
    }
    return orbitPoints;
  }, [radius]);

  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points]
  );

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        attach="material"
        color="white"
        linewidth={1}
        opacity={0.3}
        transparent
      />
    </line>
  );
};

export default OrbitPath;
