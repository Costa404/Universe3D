import OrbitPath from "./OrbitPath";
import OrbitingPlanet from "./OrbitPlanet";

import { SolarSystemProps } from "./types";
import { useOrbitStore } from "./useOrbitStore";

export const SolarSystem = ({
  onPlanetClick,
  sunPosition = [0, 0, 0],
  planets = [],
}: SolarSystemProps) => {
  const { showOrbits } = useOrbitStore();

  return (
    <>
      {planets.map((planet, index) => (
        <group key={index}>
          {showOrbits && (
            <group position={sunPosition}>
              <OrbitPath radius={planet.radius} />
            </group>
          )}
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
