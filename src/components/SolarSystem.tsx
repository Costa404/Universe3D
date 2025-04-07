import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import OrbitPath from "./Hooks/OrbitPath";

const OrbitingPlanet = ({
  targetPosition,
  radius = 8,
  speed = 0.5,
  children,
  onClick,
}) => {
  const planetRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * speed;
    planetRef.current.position.x = targetPosition[0] + Math.cos(time) * radius;
    planetRef.current.position.z = targetPosition[2] + Math.sin(time) * radius;
    planetRef.current.position.y = targetPosition[1];
  });

  return (
    <group ref={planetRef} onClick={onClick}>
      {children}
    </group>
  );
};

export const SolarSystem = ({
  onPlanetClick,
  sunPosition = [0, 0, 0],
  planets = [],
}) => {
  return (
    <>
      {planets.map((planet, index) => (
        <group key={index}>
          {/* Linha da órbita, posicionada no mesmo centro do Sol */}
          <group position={sunPosition}>
            <OrbitPath radius={planet.radius} />
          </group>

          {/* Planeta em órbita */}
          <OrbitingPlanet
            targetPosition={sunPosition}
            radius={planet.radius}
            speed={planet.speed}
            onClick={onPlanetClick}
          >
            {planet.component}
          </OrbitingPlanet>
        </group>
      ))}
    </>
  );
};
