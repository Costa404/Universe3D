import { Html } from "@react-three/drei";
import { useOrbitStore } from "./useOrbitStore";
import { useNavigate } from "react-router-dom";

export const OrbitToggleButton = () => {
  const { showOrbits, toggleOrbits } = useOrbitStore();
  const navigate = useNavigate();

  return (
    <Html
      prepend
      fullscreen
      style={{
        pointerEvents: "auto",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <span>
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
