import { Canvas } from "@react-three/fiber";
import Clothes from "./Clothes.jsx";
import Folletmagic from "./Folletmagic.jsx";
import { Stats, OrbitControls } from "@react-three/drei";
import Samarreta from "./Samarreta.jsx";

export default function ThreeScene() {
  return (
    <Canvas camera={{ fov: 30, position: [0, 0, 15], far: 5000 }}>
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[3, 4, 5]} intensity={0.8} />
      <directionalLight color="white" position={[0, -1, -5]} intensity={0.8} />
      <Clothes />
      {/*<Samarreta />*/}
      <OrbitControls />
    </Canvas>
  );
}
