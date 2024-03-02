import { useEffect, useRef } from "react";

// Import the plane model and animation-related hooks from drei
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  // Create a ref to hold a reference to the mesh
  const ref = useRef();
  // Load the plane model and animations from the glTF file
  const { scene, animations } = useGLTF(planeScene);
  // Extract animation actions using useAnimations hook
  const { actions } = useAnimations(animations, ref);

  // Use useEffect to control animations based on the isRotating prop
  useEffect(() => {
    // If isRotating is true, play the specified animation
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      // If isRotating is false, stop the animation
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  // Return a mesh with the loaded plane model
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

// Export the Plane component as the default export
export default Plane;
