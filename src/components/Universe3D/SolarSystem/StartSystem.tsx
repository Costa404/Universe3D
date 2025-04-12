import { SOLAR_SYSTEMS } from "../Hooks/Systems";
import { usePlanetInteractions } from "../Hooks/usePlanetInteractions";
import { SolarSystem } from "./SolarSystem";

export const StarSystem = () => {
  const { handlePlanetClick } = usePlanetInteractions();

  return (
    <>
      {Object.entries(SOLAR_SYSTEMS).map(([name, system]) => (
        <group key={name}>
          <group position={system.centerPosition}>{system.sun}</group>
          <SolarSystem
            centerPosition={system.centerPosition}
            planets={system.planets}
            onPlanetClick={handlePlanetClick}
          />
        </group>
      ))}
    </>
  );
};
