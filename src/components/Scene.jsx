import "@react-three/fiber";
import "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import Cube from "../shapes/Cube";
import Text from "../External-Models/Text";

export default function Scene() {
    return (
        <Canvas style={{ height: "100vh", width: "100%", display: "flex",justifyContent: "center", alignItems: "center" }}>

            <OrbitControls enableRotate enableZoom enablePan />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <color attach="background" args={["#000000"]} />
            {/* <Cube /> */}
            <Text />
        </Canvas>
    );
}