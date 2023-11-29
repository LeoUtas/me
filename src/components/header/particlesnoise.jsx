import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

const Particles = ({ count = 100 }) => {
    const mesh = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const noise = createNoise2D(Math.random);
    const noiseScale = 0.05; // Adjust this to change the "frequency" of the noise

    // Generate some random positions, speed factors, and timings
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100; // unique time offset for each particle
            const speed = 0.05 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            temp.push({
                t,
                speed,
                xFactor,
                yFactor,
                mx: 0,
                my: 0,
            });
        }
        return temp;
    }, [count]);

    // The innards of this hook will run every frame
    useFrame((state) => {
        // Makes the particle react to the mouse
        particles.forEach((particle, i) => {
            let { t, speed, xFactor, yFactor } = particle;
            t = particle.t += speed / 2;
            // Style the random noise for a and b
            const a = noise(t * noiseScale, 0);
            const b = noise(0, t * noiseScale);
            particle.mx += (state.viewport.width - particle.mx) * 0.02;
            particle.my += (state.viewport.height - particle.my) * 0.02;
            // Update the dummy object
            dummy.position.set(
                (particle.mx / 10) * a + xFactor,
                (particle.my / 10) * b + yFactor,
                0
            );
            dummy.updateMatrix();
            // And apply the matrix to the instanced item
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereBufferGeometry args={[0.016, 10, 10]} />
            <meshBasicMaterial color="#fff" />
        </instancedMesh>
    );
};

export default Particles;
