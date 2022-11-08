import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Gmail(props) {
  const { nodes, materials } = useGLTF('/gmail.glb')
  const group = useRef();
  
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime()/1;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={1.5}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['SVGMat.001']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['SVGMat.002']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['SVGMat.003']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['SVGMat.004']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['SVGMat.005']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/gmail.glb')
