import "@react-three/fiber";
import "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import Cube from "../shapes/Cube";
import { Leva } from "leva";
import { useControls } from "leva";
export default function Scene() {
  // Move the hook and variable declaration here
  const controls = useControls("Cube", {
    positionX: { value: 0, step: 0.1, min: -10, max: 10 },
    scale: { value: 1, min: 0.1, max: 5, step: 0.1 },
  });

  return (
    <div className="scene">
      <Leva />
      <Canvas
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OrbitControls enableRotate enablePan />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <color attach="background" args={["#000000"]} />

        <Cube positionX={controls.positionX} scale={controls.scale} />
      </Canvas>
    </div>
  );
}
