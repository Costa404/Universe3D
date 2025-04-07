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
    centerPosition: [0, 0, 0], // Posição no universo
    sun: <Sun scale={1.5} />,
    planets: [
      { component: <Mercury />, radius: 8, speed: 0.8 },
      { component: <Venus />, radius: 10, speed: 0.7 },
      { component: <Earth />, radius: 12, speed: 0.6 },
      { component: <Mars />, radius: 14, speed: 0.5 },
      { component: <Jupiter />, radius: 16, speed: 0.4 },
      { component: <Saturn />, radius: 18, speed: 0.3 },
      { component: <Uranus />, radius: 20, speed: 0.2 },
      { component: <Neptune />, radius: 22, speed: 0.1 },
    ],
  },
  // ALIEN: {
  //   centerPosition: [20, 0, 10], // Posição distante do sistema humano
  //   sun: <AlienStar scale={2} />, // Sol personalizado
  //   planets: [
  //     { component: <Saturn />, radius: 3, speed: 0.3 },
  //     { component: <Earth color="cyan" />, radius: 5, speed: 0.2 },
  //   ],
  // },
};
