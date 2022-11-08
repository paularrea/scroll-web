import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Instagram(props) {
  const { nodes, materials } = useGLTF('/instagram.glb')
  const group = useRef();
  
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime()/2;
  });

  return (
    <group ref={group} {...props} dispose={null} scale={2}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.07, 0]} rotation={[Math.PI / 2, 0, 0]} scale={2.96}>
            <mesh geometry={nodes.Object_11.geometry} material={materials['SVGMat.006']} />
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.003']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/instagram.glb')
