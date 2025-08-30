import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, useAnimations } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

function Three_GLB({ glbFile }) {
  const { scene, animations } = useGLTF(`${process.env.PUBLIC_URL}/models/${glbFile}.glb`);
  const { actions } = useAnimations(animations, scene);
  const groupRef = useRef();

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      action.play();
    });
  }, [actions]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust the speed here
    }
  });

  return (
    <primitive ref={groupRef} object={scene} />
  );
}

function RenderThree({ glb }) {
  const camera = { position: [6, 1.5, 1], fov: 35 };

  return (
    <Canvas shadows camera={camera}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0]} intensity={0.1} />
      <Suspense fallback={null}>
        <Three_GLB glbFile={glb} />
        <Environment preset='night' />   {/* apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default RenderThree;
