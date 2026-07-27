<script lang="ts">
   import { CircleBufferGeometry, MeshStandardMaterial, DoubleSide, ExtrudeBufferGeometry, Shape } from 'three';
   import { DEG2RAD } from 'three/src/math/MathUtils';
   import {
     AmbientLight,
     Canvas,
     DirectionalLight,
     Group,
     Mesh,
     OrbitControls,
     PerspectiveCamera
   } from 'threlte';
   import { spring } from 'svelte/motion';
   import { browser } from '$app/env';
 
   const scale = spring(1);

   let outer = new Shape();
   outer.moveTo(0,0)
    .lineTo(0, 6)
    .lineTo(1, 5)
    .lineTo(1, 1)
    .lineTo(5, 1)
    .lineTo(5, 5)
    .lineTo(6, 6)
    .lineTo(6, 0)
    .lineTo(0, 0);

    let inner = new Shape();
    inner.moveTo(2,2)
      .lineTo(2, 4)
      .lineTo(3,3)
      .lineTo(4,4)
      .lineTo(4,2)
      .lineTo(2,2);

    let triangle = new Shape();
    triangle.moveTo(1,6)
      .lineTo(3,4)
      .lineTo(5,6)
      .lineTo(1,6);

    let settings = {
      depth: 1.2,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.1,
      bevelThickness: 0.1
    };

    // Sleek, fixed cyber-emerald metallic material (no rainbow cycling)
    const logoMaterial = new MeshStandardMaterial({
      color: '#10b981',
      metalness: 0.8,
      roughness: 0.25
    });

    // Accent inner material
    const accentMaterial = new MeshStandardMaterial({
      color: '#06b6d4',
      metalness: 0.9,
      roughness: 0.15
    });
 </script>
 
 <div class="w-full h-full min-h-[240px] relative overflow-hidden flex items-center justify-center">
   {#if browser}
     <Canvas>
       <PerspectiveCamera position={{ x: 12, y: 14, z: 22 }} fov={28}>
         <OrbitControls
           maxPolarAngle={DEG2RAD * 85}
           minPolarAngle={DEG2RAD * 20}
           autoRotate={false}
           enableZoom={false}
           enableDamping={true}
           dampingFactor={0.05}
           target={{ x: 2.5, y: 2.5, z: 0.5 }}
         />
       </PerspectiveCamera>
   
       <!-- Directional Lights for metallic highlights -->
       <DirectionalLight shadow position={{ x: 10, y: 20, z: 15 }} intensity={1.5} color="#ffffff" />
       <DirectionalLight position={{ x: -10, y: 10, z: -10 }} intensity={0.6} color="#34d399" />
       <DirectionalLight position={{ x: 0, y: -10, z: 10 }} intensity={0.4} color="#06b6d4" />
       <AmbientLight intensity={0.5} />
   
       <!-- 3D Logo Mesh Group -->
       <Group 
        scale={$scale}
        rotation={{ x: DEG2RAD * -15, y: DEG2RAD * 25, z: DEG2RAD * 90 }}
        position={{ x: 2.5, y: 0.5, z: 0 }}
      >
        <Mesh
          interactive
          on:pointerenter={() => ($scale = 1.08)}
          on:pointerleave={() => ($scale = 1)}
          castShadow
          geometry={new ExtrudeBufferGeometry(outer, settings)}
          material={logoMaterial}
        />
        <Mesh
          castShadow
          geometry={new ExtrudeBufferGeometry(inner, settings)}
          material={accentMaterial}
        />
        <Mesh
          castShadow
          geometry={new ExtrudeBufferGeometry(triangle, settings)}
          material={logoMaterial}
        />
       </Group>
   
       <!-- Dark Mirror Reflection Floor -->
       <Mesh
         receiveShadow
         rotation={{ x: -90 * (Math.PI / 180) }}
         position={{ x: 2.5, y: -1, z: 0.5 }}
         geometry={new CircleBufferGeometry(5, 72)}
         material={new MeshStandardMaterial({ side: DoubleSide, color: '#090d16', metalness: 0.9, roughness: 0.1, transparent: true, opacity: 0.8 })}
       />
     </Canvas>
   {/if}
 </div>
