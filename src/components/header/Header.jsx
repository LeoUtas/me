<<<<<<< HEAD
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
          I'm actively looking for an entry-level position as a full-stack
          developer. The vision for my future development is to dive deeper into
          backend engineering.
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
=======
import React from 'react';
import './header.css';
import { Canvas } from '@react-three/fiber';
import Particles from './particlesnoise';
// import TypingEffect from "./typingEffect";
import Headersocialnetwork from './Headersocialnetwork';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h1>Good day, I'm Hoang</h1>
        <h2 className="header_h3_icons">
          <a href="https://github.com/LeoUtas" target="_blank" rel="noreferrer">
            <FaGithub />{' '}
          </a>

          <a
            href="https://www.linkedin.com/in/hoangng84/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </h2>
        <h3>
          I study and solve problems using technical tools (i.e., Figma for UI
          design, React for the frontend, Python for the backend, model
          training, and cloud services for the database). I am always learning
          to be a better problem solver.
        </h3>

        <Canvas
          style={{
            position: 'absolute',
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
>>>>>>> fc5bda79ab38a461aff32927302b2241a0378c18
