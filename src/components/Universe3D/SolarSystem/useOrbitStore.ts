import { create } from "zustand";

type OrbitStore = {
  showOrbits: boolean;
  toggleOrbits: () => void;
};

export const useOrbitStore = create<OrbitStore>((set) => ({
  showOrbits: true,
  toggleOrbits: () => set((state) => ({ showOrbits: !state.showOrbits })),
}));
