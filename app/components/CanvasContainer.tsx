// app/components/CanvasContainer.tsx
"use client"; // Ini wajib ada di baris paling atas

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function CanvasContainer() {
  return (
    <div className="w-full h-[500px]">
      <Canvas>
        {/* Pencahayaan standar */}
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        
        {/* Objek uji coba (Box) */}
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#4f46e5" />
        </mesh>
        
        {/* Kontrol agar objek bisa diputar dengan mouse */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}