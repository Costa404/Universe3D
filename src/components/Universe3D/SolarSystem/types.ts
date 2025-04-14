import { JSX, ReactNode } from "react";

export type Planet = {
  component: ReactNode;
  radius: number;
  speed: number;
};

export type SolarSystemProps = {
  onPlanetClick: (event: any) => void;
  sunPosition?: [number, number, number];
  planets: {
    radius: number;
    speed: number;
    component: JSX.Element;
  }[];
  showOrbits?: boolean;
};

export type OrbitingPlanetProps = {
  targetPosition: [number, number, number];
  radius?: number;
  speed?: number;
  children: ReactNode;
  onClick?: (event: any) => void;
};
