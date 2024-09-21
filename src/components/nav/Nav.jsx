/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css';
import React from 'react';
import { useState } from 'react';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onclick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        Home
      </a>
      <a
        href="#projects"
        onclick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        Projects
      </a>

      <a
        href="#blogs"
        onclick={() => setActiveNav('#blogs')}
        className={activeNav === '#blogs' ? 'active' : ''}
      >
        Blogs
      </a>

      <a
        href="#about"
        onclick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        About
      </a>
      {/* <a
        href="#experience"
        onclick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        Experience
      </a> */}
      <a
        href={process.env.PUBLIC_URL + '/assets/HOANG_resume_Keyinhack.pdf'}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </nav>
  );
}

export default Nav;
