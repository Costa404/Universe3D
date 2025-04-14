import Earth from "../Planets/Earth";
import Jupiter from "../Planets/Jupiter";
import Mars from "../Planets/Mars";
import Mercury from "../Planets/Mercury";
import Neptune from "../Planets/Neptune";
import Saturn from "../Planets/Saturn";
import Sun from "../Planets/Sun";
import Uranus from "../Planets/Uranus";
import Venus from "../Planets/Venus";

export const SOLAR_SYSTEMS = {
  HUMAN: {
    centerPosition: [0, 0, 300],
    sun: <Sun scale={1.5} />,
    planets: [
      { component: <Mercury />, radius: 14, speed: 0.8 },
      { component: <Venus />, radius: 18, speed: 0.7 },
      { component: <Earth />, radius: 25, speed: 0.6 },
      { component: <Mars />, radius: 31, speed: 0.5 },
      { component: <Jupiter />, radius: 36, speed: 0.4 },
      { component: <Saturn />, radius: 43, speed: 0.3 },
      { component: <Uranus />, radius: 48, speed: 0.2 },
      { component: <Neptune />, radius: 55, speed: 0.1 },
    ],
  },
};
