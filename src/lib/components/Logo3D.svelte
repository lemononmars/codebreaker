<script lang="ts">
   import { MeshStandardMaterial, ExtrudeBufferGeometry, Shape } from 'three';
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
   import { onMount, onDestroy } from 'svelte';

   const scale = spring(1);
   let yRot = 0;
   let animFrameId: number;

   onMount(() => {
     const animate = () => {
       yRot += 0.006;
       animFrameId = requestAnimationFrame(animate);
     };
     animate();
   });

   onDestroy(() => {
     if (browser && animFrameId) {
       cancelAnimationFrame(animFrameId);
     }
   });

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

    const logoMaterial = new MeshStandardMaterial({
      color: '#10b981',
      metalness: 0.8,
      roughness: 0.25
    });

    const accentMaterial = new MeshStandardMaterial({
      color: '#06b6d4',
      metalness: 0.9,
      roughness: 0.15
    });
 </script>
 
 <div class="w-full h-full min-h-[260px] relative overflow-hidden flex items-center justify-center mx-auto cursor-grab active:cursor-grabbing pointer-events-auto">
   {#if browser}
     <Canvas>
       <PerspectiveCamera position={{ x: 0, y: 1.5, z: 15 }} fov={30}>
         <OrbitControls
           maxPolarAngle={DEG2RAD * 180}
           minPolarAngle={0}
           enableRotate={true}
           enablePan={true}
           enableZoom={true}
           autoRotate={false}
           enableDamping={true}
           dampingFactor={0.05}
           target={{ x: 0, y: 0, z: 0 }}
         />
       </PerspectiveCamera>
   
       <DirectionalLight shadow position={{ x: 10, y: 20, z: 15 }} intensity={1.5} color="#ffffff" />
       <DirectionalLight position={{ x: -10, y: 10, z: -10 }} intensity={0.6} color="#34d399" />
       <DirectionalLight position={{ x: 0, y: -10, z: 10 }} intensity={0.4} color="#06b6d4" />
       <AmbientLight intensity={0.6} />
   
       <!-- 3D Logo Group with continuous Y-axis animation & drag interaction -->
       <Group rotation={{ x: DEG2RAD * 180, y: yRot, z: -DEG2RAD * 90 }}>
         <Group 
           scale={$scale}
           position={{ x: -3, y: -3, z: -0.6 }}
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
       </Group>
     </Canvas>
   {/if}
 </div>
