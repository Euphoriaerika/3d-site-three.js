import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

const Sky = ({ isRotating, directionRotatiing }) => {
  // Load the sky model using useGLTF hook
  const sky = useGLTF(skyScene);

  // Create a ref to hold a reference to the mesh
  const skyRef = useRef();

  // Use useFrame to perform animations in the render loop
  useFrame((_, delta) => {
    // If isRotating is true, adjust the rotation of the sky based on directionRotatiing
    if (isRotating) {
      // Multiply the rotation speed by delta for smooth animation
      // The directionRotatiing is determined by the mouse's delta during island rotation
      skyRef.current.rotation.y += 2 * delta * directionRotatiing;
    }
  });

  // Return a mesh with the loaded sky model
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

// Export the Sky component as the default export
export default Sky;
