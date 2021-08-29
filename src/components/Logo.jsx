import React from "react";
import { ReactComponent as LogoSvg } from "../static/images/Logo.svg";
import './Logo.css';

const Logo = ({
  componentClass = '', 
  color = 'white'
}) => {
    var classes = `logo text-${color} ${componentClass}`;

    return (
      <div className={classes}>
        <LogoSvg fill={color} />
        Books
      </div>
    );
}

export default Logo;