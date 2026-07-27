<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	let container: HTMLDivElement;
	let animationFrameId: number;

	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;

	let particleSystem: THREE.Points;
	let lineSegments: THREE.LineSegments;
	let floatingGroup: THREE.Group;
	let rippleRings: THREE.Mesh[] = [];

	let mouse = new THREE.Vector2(-999, -999);
	let targetMouse = new THREE.Vector2(-999, -999);
	let raycaster = new THREE.Raycaster();
	let mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
	let intersectionPoint = new THREE.Vector3();

	const handleMouseMove = (event: MouseEvent) => {
		targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	};

	const handleClick = (event: MouseEvent) => {
		if (!scene || !camera) return;

		// Create interactive expanding ripple ring at mouse position
		raycaster.setFromCamera(targetMouse, camera);
		const targetVec = new THREE.Vector3();
		raycaster.ray.intersectPlane(mousePlane, targetVec);

		const ringGeo = new THREE.RingGeometry(0.2, 0.5, 32);
		const ringMat = new THREE.MeshBasicMaterial({
			color: 0x10b981,
			side: THREE.DoubleSide,
			transparent: true,
			opacity: 0.8
		});
		const ring = new THREE.Mesh(ringGeo, ringMat);
		ring.position.copy(targetVec);
		ring.scale.set(1, 1, 1);
		scene.add(ring);
		rippleRings.push(ring);
	};

	const handleResize = () => {
		if (!camera || !renderer) return;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	};

	onMount(() => {
		if (!container) return;

		// Scene Setup
		scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2(0x030712, 0.012);

		// Camera
		camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.set(0, 5, 25);
		camera.lookAt(0, 0, 0);

		// Renderer
		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x030712, 1);
		container.appendChild(renderer.domElement);

		floatingGroup = new THREE.Group();
		scene.add(floatingGroup);

		// 1. Interactive Particles
		const particleCount = 180;
		const particleGeometry = new THREE.BufferGeometry();
		const positions = new Float32Array(particleCount * 3);
		const basePositions = new Float32Array(particleCount * 3);
		const colors = new Float32Array(particleCount * 3);

		const colorPalette = [
			new THREE.Color(0x10b981), // Emerald
			new THREE.Color(0x06b6d4), // Cyan
			new THREE.Color(0x34d399), // Mint
			new THREE.Color(0x3b82f6)  // Blue
		];

		for (let i = 0; i < particleCount; i++) {
			const x = (Math.random() - 0.5) * 55;
			const y = (Math.random() - 0.5) * 35;
			const z = (Math.random() - 0.5) * 30;

			positions[i * 3] = x;
			positions[i * 3 + 1] = y;
			positions[i * 3 + 2] = z;

			basePositions[i * 3] = x;
			basePositions[i * 3 + 1] = y;
			basePositions[i * 3 + 2] = z;

			const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
			colors[i * 3] = col.r;
			colors[i * 3 + 1] = col.g;
			colors[i * 3 + 2] = col.b;
		}

		particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

		const particleMaterial = new THREE.PointsMaterial({
			size: 0.45,
			vertexColors: true,
			transparent: true,
			opacity: 0.85,
			blending: THREE.AdditiveBlending
		});

		particleSystem = new THREE.Points(particleGeometry, particleMaterial);
		floatingGroup.add(particleSystem);

		// 2. Interactive Constellation Lines
		const maxLines = 120;
		const linePositions = new Float32Array(maxLines * 6);
		const lineGeometry = new THREE.BufferGeometry();
		lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
		const lineMaterial = new THREE.LineBasicMaterial({
			color: 0x10b981,
			transparent: true,
			opacity: 0.15
		});
		lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
		floatingGroup.add(lineSegments);

		// 3. Grid Helper
		const gridHelper = new THREE.GridHelper(80, 40, 0x10b981, 0x1e293b);
		gridHelper.position.y = -9;
		if (Array.isArray(gridHelper.material)) {
			gridHelper.material.forEach((m) => {
				m.transparent = true;
				m.opacity = 0.2;
			});
		} else {
			gridHelper.material.transparent = true;
			gridHelper.material.opacity = 0.2;
		}
		scene.add(gridHelper);

		// Animation Loop
		let clock = new THREE.Clock();

		const animate = () => {
			animationFrameId = requestAnimationFrame(animate);
			const elapsedTime = clock.getElapsedTime();

			// Smooth Mouse Interpolation
			mouse.x += (targetMouse.x - mouse.x) * 0.08;
			mouse.y += (targetMouse.y - mouse.y) * 0.08;

			// Raycast to find 3D mouse position
			raycaster.setFromCamera(mouse, camera);
			raycaster.ray.intersectPlane(mousePlane, intersectionPoint);

			// Rotate group gently
			floatingGroup.rotation.y = elapsedTime * 0.02 + mouse.x * 0.3;
			floatingGroup.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05 - mouse.y * 0.2;

			// Particle mouse repulsion / attractor physics
			const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
			const posArr = posAttr.array as Float32Array;

			let lineIdx = 0;

			for (let i = 0; i < particleCount; i++) {
				const px = basePositions[i * 3];
				const py = basePositions[i * 3 + 1];
				const pz = basePositions[i * 3 + 2];

				// Calculate distance to mouse in 3D
				const dx = px - intersectionPoint.x;
				const dy = py - intersectionPoint.y;
				const distSq = dx * dx + dy * dy;

				// Repulsion force if within radius
				if (distSq < 64) {
					const force = (8 - Math.sqrt(distSq)) * 0.3;
					posArr[i * 3] = px + (dx / (Math.sqrt(distSq) + 0.1)) * force;
					posArr[i * 3 + 1] = py + (dy / (Math.sqrt(distSq) + 0.1)) * force;
				} else {
					// Wave motion return to base
					posArr[i * 3] += (px - posArr[i * 3]) * 0.05;
					posArr[i * 3 + 1] = py + Math.sin(elapsedTime * 2 + px) * 0.1;
				}

				// Build constellation lines between nearby particles
				for (let j = i + 1; j < particleCount && lineIdx < maxLines; j++) {
					const dx2 = posArr[i * 3] - posArr[j * 3];
					const dy2 = posArr[i * 3 + 1] - posArr[j * 3 + 1];
					const dz2 = posArr[i * 3 + 2] - posArr[j * 3 + 2];
					const dist2 = dx2 * dx2 + dy2 * dy2 + dz2 * dz2;

					if (dist2 < 25) {
						linePositions[lineIdx * 6] = posArr[i * 3];
						linePositions[lineIdx * 6 + 1] = posArr[i * 3 + 1];
						linePositions[lineIdx * 6 + 2] = posArr[i * 3 + 2];

						linePositions[lineIdx * 6 + 3] = posArr[j * 3];
						linePositions[lineIdx * 6 + 4] = posArr[j * 3 + 1];
						linePositions[lineIdx * 6 + 5] = posArr[j * 3 + 2];
						lineIdx++;
					}
				}
			}

			posAttr.needsUpdate = true;
			(lineGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

			// Animate click ripples
			for (let r = rippleRings.length - 1; r >= 0; r--) {
				const ring = rippleRings[r];
				ring.scale.addScalar(0.2);
				const mat = ring.material as THREE.MeshBasicMaterial;
				mat.opacity -= 0.03;

				if (mat.opacity <= 0) {
					scene.remove(ring);
					ring.geometry.dispose();
					mat.dispose();
					rippleRings.splice(r, 1);
				}
			}

			renderer.render(scene, camera);
		};

		animate();

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('click', handleClick);
		window.addEventListener('resize', handleResize);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('click', handleClick);
			window.removeEventListener('resize', handleResize);
		}
		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId);
		}
		if (renderer && renderer.domElement && container) {
			container.removeChild(renderer.domElement);
			renderer.dispose();
		}
	});
</script>

<div
	bind:this={container}
	class="fixed inset-0 pointer-events-none z-0 overflow-hidden"
	aria-hidden="true"
></div>
