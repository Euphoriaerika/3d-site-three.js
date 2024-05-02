import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import skyScene from "/sky.glb";

const Sky = ({ directionRotating, ...props }) => {
  // Load the sky model using useGLTF hook
  const sky = useGLTF(skyScene);

  // Create a ref to hold a reference to the mesh
  const skyRef = useRef();

  // Use useFrame to perform animations in the render loop
  useFrame((_, delta) => {
    //Rotate the sky towards the directionRotation at a smooth rate
    if (directionRotating !== null)
      skyRef.current.rotation.y +=
        (directionRotating - skyRef.current.rotation.y) * 10 * delta;
  });

  return (
    <mesh ref={skyRef} {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
