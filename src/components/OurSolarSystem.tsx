import Earth from "./Planets/Earth";
import Jupiter from "./Planets/Jupiter";
import Neptune from "./Planets/Neptune";
import Saturn from "./Planets/Saturn";
import Sun from "./Planets/Sun";
import { SolarSystem } from "./SolarSystem";

export const OurSolarSystem = ({ onPlanetClick }) => {
  const planets = [
    { component: <Earth />, radius: 2, speed: 0.6 },
    { component: <Jupiter />, radius: 3, speed: 0.5 },
    { component: <Saturn />, radius: 7, speed: 0.1 },
    { component: <Neptune />, radius: 5, speed: 0.3 },
  ];

  return (
    <>
      <Sun />
      <SolarSystem planets={planets} onPlanetClick={onPlanetClick} />
    </>
  );
};
