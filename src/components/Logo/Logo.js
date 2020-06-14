import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {

    return (
        <div className="logoContainer">
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img src={brain} alt="logo"></img></div>
            </Tilt>
        </div>
    );

}

export default Logo;