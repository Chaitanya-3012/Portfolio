import { useGLTF } from "@react-three/drei";

export default function Text({ scale }) {
  const model = useGLTF("/models/Text.glb");

  return <primitive object={model.scene} position={[0, -5, 0]} scale={scale} />;
}
