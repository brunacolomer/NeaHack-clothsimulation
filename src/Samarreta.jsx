import { useFrame } from "@react-three/fiber";
import React from "react";
import * as three from "three";
import { useEffect } from "react";

export default function Samarreta() {
  const myShirt = React.useRef();

  useEffect(() => {
    const vertices = new Float32Array([
      0,
      0,
      0, // Vertex 1
      1,
      0,
      0, // Vertex 2
      0,
      1,
      0, // Vertex 3
    ]);
    const geometry = new three.BufferGeometry();
    const positionAttr = new three.BufferAttribute(vertices, 3);
    geometry.setAttribute("position", positionAttr);

    myShirt.current.geometry = geometry;
  }, []);
  useFrame(() => {
    const positions = myShirt.current.geometry.attributes.position.array;
    const newPositions = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i += 3) {
      newPositions[i] = positions[i]; // X
      newPositions[i + 1] = positions[i + 1]; // Y (unchanged)
      newPositions[i + 2] = positions[i + 2]; // Z (unchanged)
    }
    const newAttribute = new three.BufferAttribute(newPositions, 3);
    myShirt.current.geometry.setAttribute("position", newAttribute);
    //myShirt.current.geometry.attributes.position.needsUpdate = true;
    //myShirt.current.geometry.attributes.position.setArray(vertices);
  });

  return <mesh ref={myShirt}></mesh>;
}
