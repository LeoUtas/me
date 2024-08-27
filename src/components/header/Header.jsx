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
          I'm actively looking for a developer position. I have a quantitative
          analysis background and have built multiple full-stack applications,
          computer vision models, applied artificial intelligence (AI)
          solutions, and written tech blogs.
        </h3>

        <Canvas className="canvas">
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
