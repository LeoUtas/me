import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 100 }) => {
    const mesh = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Generate some random positions, speed factors and timings
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
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
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
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
