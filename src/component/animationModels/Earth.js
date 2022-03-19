import React, {  useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function EarthModel({ ...props }) {
  const group = useRef();
  const bodyMesh = useRef();
  const { nodes, materials, animations } = useGLTF("/earth.gltf");
  const gold = useGLTF("/earth.gltf");
  const { actions } = useAnimations(animations, group);

 

  useFrame(() => (group.current.rotation.x = group.current.rotation.y += 0.001));
  

  return (
    <group ref={group} scale={.5} {...props} dispose={null}  >
      <group  rotation={[-Math.PI / 2, 0, 0]}>
        
        <mesh ref={bodyMesh} transparent
          geometry={nodes.EARTH_0.geometry}
          material={materials["Material.001"]}
        />
        <primitive object={nodes.Armature_rootJoint} />
        <skinnedMesh 
          geometry={nodes.ATM_0.geometry}
          material={materials["Material.002"]}
          skeleton={nodes.ATM_0.skeleton}
        />
      </group>
      
    </group>
  );
}

useGLTF.preload("/earth.gltf");
