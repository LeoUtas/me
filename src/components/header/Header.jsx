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
          I have a strong background in quantitative research with formal
          training, and
        </h3>
        <h3>I am a problem solver</h3>

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
