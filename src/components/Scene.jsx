import "@react-three/fiber";
import "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Welcome from "./Welcome";
export default function Scene() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "40vw",
          height: "100vh",
        }}
      >
        <h1
          style={{
            top: "20px",
            left: "20px",
            color: "white",
            fontSize: "2rem",
          }}
        >
          Welcome to the 3D Scene
        </h1>
      </div>

      <div style={{ width: "60vw", height: "100vh" }}>
        <Welcome />
      </div>
    </div>
  );
}
