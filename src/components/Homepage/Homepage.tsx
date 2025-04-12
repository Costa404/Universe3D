import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/Universe3D")}
      >
        Universe3D
      </button>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/LaunchSpaceship")}
      >
        LaunchSpaceship
      </button>
    </>
  );
};

export default Homepage;
