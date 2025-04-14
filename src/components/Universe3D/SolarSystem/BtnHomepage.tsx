import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { CameraSystemHandle } from "../Spaceship/CameraSystem.tsx";
import { useOrbitStore } from "./useOrbitStore";

interface OrbitToggleButtonProps {
  showOrbits: boolean;
  setShowOrbits: (value: boolean) => void;
  cameraSystemRef: React.RefObject<CameraSystemHandle>;
}

export const OrbitToggleButton = () => {
  const navigate = useNavigate();

  const { showOrbits, toggleOrbits } = useOrbitStore();
  return (
    <Html
      prepend
      fullscreen
      style={{
        pointerEvents: "auto",
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        padding: "20px",
      }}
    >
      <span>
        {/* Botão de toggle das órbitas */}
        <button
          className="btn btn-primary px-4"
          onClick={toggleOrbits}
          style={{
            cursor: "pointer",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          {showOrbits ? "Hide Orbits" : "Show Orbits"}
        </button>
        {/* Botão para voltar à homepage */}
        <button
          className="btn btn-primary px-4"
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          Homepage
        </button>
      </span>
    </Html>
  );
};
