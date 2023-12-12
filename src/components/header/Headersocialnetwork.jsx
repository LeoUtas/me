import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function Headersocialnetwork() {
  return (
    <div className="Headersocialnetwork_icons">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin className="icon_items" />
      </a>

      <a
        href="https://github.com/LeoUtas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub className="icon_items" />
      </a>
    </div>
  );
}

export default Headersocialnetwork;
