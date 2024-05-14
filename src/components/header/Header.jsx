import React from 'react';
import './header.css';
import { Canvas } from '@react-three/fiber';
import Particles from './particlesnoise';
import Headersocialnetwork from './Headersocialnetwork';

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h1>GOOD DAY, I'M HOANG</h1>

        <h3>
          I study and solve problems using technical tools (i.e., Figma for UI
          design, React for the frontend, Python for the backend, model
          training, and cloud services for the database). I call it full-stack
          problem-solving
        </h3>

        <Canvas
          style={{
            position: 'flex',
            width: '100%',
            height: '100%',
          }}
        >
          <Particles count={8000} />
        </Canvas>
        <div className="header_items">
          <Headersocialnetwork className="header_item" />
        </div>
      </div>
    </header>
  );
}

export default Header;
