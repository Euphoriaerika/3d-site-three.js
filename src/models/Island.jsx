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
    setDirectionRotating(islandRef.current.rotation.y);

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

      // Update the rotation of the object based on the calculated delta
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      // Update the last recorded X-coordinate for the next calculation
      setDirectionRotating(islandRef.current.rotation.y);

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
        setDirectionRotating(islandRef.current.rotation.y);
        rotationSpeed.current = 0.0125;
      } else if (e.key === "ArrowRight") {
        // Rotate the object to the right by a small angle
        islandRef.current.rotation.y -= 0.01 * Math.PI;
        setDirectionRotating(islandRef.current.rotation.y);
        rotationSpeed.current = -0.0125;
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
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh geometry={nodes.Object_0.geometry} material={materials.Balloon} />
        <mesh geometry={nodes.Object_0_1.geometry} material={materials.Bells} />
        <mesh
          geometry={nodes.Object_0_2.geometry}
          material={materials.BottleRings}
        />
        <mesh
          geometry={nodes.Object_0_3.geometry}
          material={materials.Bottles}
        />
        <mesh
          geometry={nodes.Object_0_4.geometry}
          material={materials.BottomCabins}
        />
        <mesh
          geometry={nodes.Object_0_5.geometry}
          material={materials.Bottom_WoodTiling}
        />
        <mesh
          geometry={nodes.Object_0_6.geometry}
          material={materials.CabinGlass}
        />
        <mesh
          geometry={nodes.Object_0_7.geometry}
          material={materials.Chimney_PBolts}
        />
        <mesh
          geometry={nodes.Object_0_8.geometry}
          material={materials.ClothesPipeWater}
        />
        <mesh
          geometry={nodes.Object_0_9.geometry}
          material={materials.CrateBarrel}
        />
        <mesh
          geometry={nodes.Object_0_10.geometry}
          material={materials.FirewoodRope}
        />
        <mesh
          geometry={nodes.Object_0_11.geometry}
          material={materials.Grass_base}
        />
        <mesh
          geometry={nodes.Object_0_12.geometry}
          material={materials.Groundrocks}
        />
        <mesh
          geometry={nodes.Object_0_13.geometry}
          material={materials.House_PlasterWall}
        />
        <mesh
          geometry={nodes.Object_0_14.geometry}
          material={materials.House_Plaster_Inside}
        />
        <mesh
          geometry={nodes.Object_0_15.geometry}
          material={materials.House_Wood_tiling}
        />
        <mesh
          geometry={nodes.Object_0_16.geometry}
          material={materials.PipeLantern}
        />
        <mesh
          geometry={nodes.Object_0_17.geometry}
          material={materials.PipeLanternLens}
        />
        <mesh
          geometry={nodes.Object_0_18.geometry}
          material={materials.Platform_WoodTiling}
        />
        <mesh
          geometry={nodes.Object_0_19.geometry}
          material={materials.RoofMaterial}
        />
        <mesh
          geometry={nodes.Object_0_20.geometry}
          material={materials.RoofMaterial2}
        />
        <mesh
          geometry={nodes.Object_0_21.geometry}
          material={materials.Shed_PlasterWall}
        />
        <mesh
          geometry={nodes.Object_0_22.geometry}
          material={materials.Shed_Wood_Tiling}
        />
        <mesh
          geometry={nodes.Object_0_23.geometry}
          material={materials.StonesChimney}
        />
        <mesh
          geometry={nodes.Object_0_24.geometry}
          material={materials.WindowGlass}
        />
        <mesh
          geometry={nodes.Object_0_25.geometry}
          material={materials.firewall}
        />
        <mesh
          geometry={nodes.Object_0_26.geometry}
          material={materials.stone_wall}
        />
      </group>
    </a.group>
  );
};

export default Island;
