import React from "react";
import { useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";

export default function Folletmagic() {
  const myMeshi = React.useRef();
  useFrame(() => {});
  const obj = useLoader(OBJLoader, "/textured_mesh.obj");

  return (
    <primitive object={obj} ref={myMeshi}>
      <meshNormalMaterial wireframe />
      {/* <meshStandardMaterial color="red" /> */}
      {/* <meshBasicMaterial color="blue" /> */}
      {/* <meshPhongMaterial color="green" /> */}
      {/* <meshLambertMaterial color="yellow" /> */}
      {/* <meshPhysicalMaterial color="purple" /> */}
    </primitive>
  );
}
