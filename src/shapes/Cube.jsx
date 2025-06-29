import { useRef } from "react";

export default function Cube({
  positionX = 0,
  scale = 1,
}) {
  const meshRef = useRef();

  return (
    // set position of cube as props

    <mesh ref={meshRef} position={[positionX, 0, 0]} scale={[scale, scale, scale]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ff00" emissive="#101010" />
    </mesh>
  );
}
