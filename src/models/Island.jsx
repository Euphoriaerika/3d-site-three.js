import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import islandScene from "../assets/3d/island.glb";

const Island = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  setDirectionRotating,
  ...props
}) => {
  // Create a ref to hold a reference to the group of island objects
  const islandRef = useRef();
  const { gl, viewport } = useThree();

  // Load the objects and materials from the glTF scene
  const { nodes, materials } = useGLTF(islandScene);

  // Ref to store the last horizontal position of the mouse
  const lastX = useRef(0);
  // Ref to store the rotation speed
  const rotationSpeed = useRef(0);
  // Damping factor for smooth rotation slowdown
  const dampingFactor = 0.95;

  /* ___mouse_event_functions___ */

  // Mouse or touch press event handler
  const handlePointerDown = (e) => {
    e.stopPropagation();
    if (!e.touches) {
      e.preventDefault();
    }
    setIsRotating(true);

    // Determine the horizontal position of the pointer (mouse or touch)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    // Update the last recorded X-coordinate for future calculations
    lastX.current = clientX;
  };

  // Mouse or touch release event handler
  const handlePointerUp = (e) => {
    e.stopPropagation();
    if (!e.touches) {
      e.preventDefault();
    }
    setIsRotating(false);
  };

  // Mouse or touch move event handler
  const handlePointerMove = (e) => {
    e.stopPropagation();
    if (!e.touches) {
      e.preventDefault();
    }

    if (isRotating) {
      // Determine the horizontal position of the pointer (mouse or touch)
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      // Calculate the change in position normalized by the viewport width
      const delta = (clientX - lastX.current) / viewport.width;

      // Set the direction of rotation for other objects (Sky) based on the calculated delta
      setDirectionRotating(delta);

      // Update the rotation of the object based on the calculated delta
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      // Update the last recorded X-coordinate for the next calculation
      lastX.current = clientX;
      // Update the rotation speed with the calculated delta
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  /* ___keyboard_event_functions___ */

  // Keydown event handler
  const handleKeyDown = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(true);
      if (e.key === "ArrowLeft") {
        // Rotate the object to the left by a small angle
        islandRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.0125;
        setDirectionRotating(0.2);
      } else if (e.key === "ArrowRight") {
        // Rotate the object to the right by a small angle
        islandRef.current.rotation.y -= 0.01 * Math.PI;
        rotationSpeed.current = -0.0125;
        setDirectionRotating(-0.2);
      }
    }
  };

  // Keyup event handler
  const handleKeyUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // Animation loop using useFrame
  useFrame(() => {
    if (!isRotating) {
      // Damping the rotation speed for smooth slowdown
      rotationSpeed.current *= dampingFactor;

      // Ensure rotation speed is zero if it's very small
      if (Math.abs(rotationSpeed.current) < 0.01) {
        rotationSpeed.current = 0;
      }

      // Update the rotation of the object with the damped speed
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // Get the current rotation of the island
      const rotation = islandRef.current.rotation.y;

      // Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI]
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  // Add and remove event listeners for mouse, keyboard, and touch events
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("touchend", handlePointerUp);
    document.addEventListener("touchmove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("touchend", handlePointerUp);
      document.removeEventListener("touchmove", handlePointerMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // Return the JSX for the Island component
  return (
    <a.group ref={islandRef} {...props}>
      {/* Mesh elements representing different parts of the island */}
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
