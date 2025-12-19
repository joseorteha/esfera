import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

interface ChristmasOrnamentProps {
  isActivated: boolean;
  onClick: () => void;
}

const InnerGlow: React.FC<{ isActivated: boolean }> = ({ isActivated }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      const targetOpacity = isActivated ? 0.7 : 0.3;
      material.opacity += (targetOpacity - material.opacity) * 0.05;
      
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} scale={0.75}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        color={isActivated ? "#7dd3fc" : "#60a5fa"}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const OrnamentSphere: React.FC<ChristmasOrnamentProps> = ({ isActivated, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
      <group onClick={onClick}>
        {/* Inner glow */}
        <InnerGlow isActivated={isActivated} />
        
        {/* Main ornament sphere - glass effect */}
        <mesh
          ref={meshRef}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshPhysicalMaterial
            color={isActivated ? "#3b82f6" : "#1e40af"}
            metalness={0.1}
            roughness={0.05}
            transmission={0.6}
            thickness={0.5}
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            ior={1.5}
          />
        </mesh>

        {/* Silver ring/cap */}
        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[0.15, 0.2, 0.15, 16]} />
          <meshStandardMaterial
            color="#94a3b8"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Hanging loop */}
        <mesh position={[0, 1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.08, 0.02, 8, 16]} />
          <meshStandardMaterial
            color="#94a3b8"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Decorative silver stripes */}
        {[0, Math.PI / 3, (2 * Math.PI) / 3].map((rotation, i) => (
          <mesh key={i} rotation={[0, rotation, 0]}>
            <torusGeometry args={[1.01, 0.012, 8, 64]} />
            <meshStandardMaterial
              color="#cbd5e1"
              metalness={0.8}
              roughness={0.3}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}

        {/* Glow effect when activated */}
        {isActivated && (
          <pointLight
            position={[0, 0, 0]}
            color="#60a5fa"
            intensity={3}
            distance={6}
          />
        )}
      </group>
    </Float>
  );
};

const ChristmasSphere: React.FC<ChristmasOrnamentProps> = ({ isActivated, onClick }) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#f0f9ff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#60a5fa" />
        <pointLight position={[0, 3, 0]} intensity={0.6} color="#93c5fd" />
        
        <Environment preset="city" />
        
        <OrnamentSphere isActivated={isActivated} onClick={onClick} />
      </Canvas>
    </div>
  );
};

export default ChristmasSphere;
