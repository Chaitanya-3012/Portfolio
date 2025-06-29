import { useGLTF } from "@react-three/drei"

export default function Text() {
    const model = useGLTF("/models/Text.glb");
    return (<primitive object={model.scene} position={[0, 0, 0]} scale={1} />);
        
}