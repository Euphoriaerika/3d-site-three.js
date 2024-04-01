import { useEffect, useRef } from "react";

// Import the witch model and animation-related hooks from drei
import scene from "../assets/3d/witch.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Witch = ({ isRotating, ...props }) => {
  // Create a ref to hold a reference to the mesh
  const group = useRef();
  // Load the witch model and animations using useGLTF hook
  const { nodes, materials, animations } = useGLTF(scene);
  // Extract animation actions using useAnimations hook
  const { actions } = useAnimations(animations, group);

  // Use useEffect to control animations based on the isRotating prop
  useEffect(() => {
    actions["idle"].play();
  }, [actions, isRotating]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[-4.578, -108.318, -235.142]}
          rotation={[-1.355, 0, 0.094]}
        >
          <group
            name="a3aefbcdadc14bfea8d9c19eed4ba181fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group
                    name="back"
                    position={[-0.118, 95.586, -1000.36]}
                    rotation={[0, -1.571, 0]}
                  >
                    <group name="Object_228" />
                  </group>
                  <group
                    name="bottom"
                    position={[-12.082, -1000.67, 3.048]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                  >
                    <group name="Object_226" />
                  </group>
                  <group name="left" position={[-1016.04, 138.9, 33.408]}>
                    <group name="Object_224" />
                  </group>
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.lambert46}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.lambert41}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.lambert43}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.lambert44}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.lambert45}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Chain_Chronicle_000_lambert39}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.lambert47}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.lambert42}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <group name="Skin1" />
                  <group name="Skin1001" />
                  <group name="Weapon" />
                  <group name="Weapon001" />
                  <primitive object={nodes._rootJoint} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Witch;
