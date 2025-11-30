import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const ProteinViewer = ({ objPath, width = '100%', height = '400px' }) => {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fa);
    
    // Camera setup
    const aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    // Variables for rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };
    let modelGroup = null;

    // Load OBJ file
    const loader = new OBJLoader();
    loader.load(
      objPath,
      (object) => {
        // Create a group to hold the model
        modelGroup = new THREE.Group();
        
        // Apply material to all meshes
        object.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshPhongMaterial({
              color: 0x4a90e2,
              shininess: 80,
              specular: 0x222222,
              flatShading: false,
            });
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        modelGroup.add(object);
        scene.add(modelGroup);

        // Center and scale the model
        const box = new THREE.Box3().setFromObject(modelGroup);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Center the model
        modelGroup.position.sub(center);
        modelGroup.scale.set(1.5, 1.5, 1.5);
        
        // Position camera based on model size
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        cameraZ *= 1.5; // Add some padding
        camera.position.z = cameraZ;
        camera.lookAt(0, 0, 0);

        setLoading(false);
      },
      (xhr) => {
        // Progress callback
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (err) => {
        console.error('Error loading OBJ file:', err);
        setError('Failed to load 3D model');
        setLoading(false);
      }
    );

    // Mouse event handlers for rotation
    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const onMouseMove = (e) => {
      if (!isDragging || !modelGroup) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      // Update rotation velocity
      rotationVelocity.x = deltaMove.y * 0.01;
      rotationVelocity.y = deltaMove.x * 0.01;

      // Apply rotation
      modelGroup.rotation.y += rotationVelocity.y;
      modelGroup.rotation.x += rotationVelocity.x;

      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch event handlers for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || !modelGroup || e.touches.length !== 1) return;

      const deltaMove = {
        x: e.touches[0].clientX - previousMousePosition.x,
        y: e.touches[0].clientY - previousMousePosition.y
      };

      rotationVelocity.x = deltaMove.y * 0.01;
      rotationVelocity.y = deltaMove.x * 0.01;

      modelGroup.rotation.y += rotationVelocity.y;
      modelGroup.rotation.x += rotationVelocity.x;

      previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    // Add event listeners
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('mouseleave', onMouseUp);
    renderer.domElement.addEventListener('touchstart', onTouchStart);
    renderer.domElement.addEventListener('touchmove', onTouchMove);
    renderer.domElement.addEventListener('touchend', onTouchEnd);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Apply damping to rotation when not dragging
      if (!isDragging && modelGroup) {
        rotationVelocity.x *= 0.95;
        rotationVelocity.y *= 0.95;
        
        modelGroup.rotation.y += rotationVelocity.y;
        modelGroup.rotation.x += rotationVelocity.x;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const newAspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.aspect = newAspect;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('mouseleave', onMouseUp);
      renderer.domElement.removeEventListener('touchstart', onTouchStart);
      renderer.domElement.removeEventListener('touchmove', onTouchMove);
      renderer.domElement.removeEventListener('touchend', onTouchEnd);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [objPath]);

  return (
    <div style={{ position: 'relative', width, height }}>
      <div 
        ref={mountRef} 
        style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '8px', 
          overflow: 'hidden',
          cursor: 'grab'
        }} 
      />
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#666',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Loading 3D model...
        </div>
      )}
      {error && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#e74c3c',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default ProteinViewer;
