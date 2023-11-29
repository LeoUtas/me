import React from "react";
import "./header.css";
import { Canvas } from "@react-three/fiber";
import Particles from "./particlesnoise";
// import TypingEffect from "./typingEffect";
import Headersocialnetwork from "./Headersocialnetwork";

function Header() {
    return (
        <header>
            <div className="container header_container">
                <h1>Good day, I'm Hoang</h1>
                <h3>
                    I am a graduate student at Memorial University of
                    Newfoundland, and I have a passion for applied quantitative
                    analysis. To me, randomness holds a mysterious charm.
                </h3>

                <Canvas
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
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
