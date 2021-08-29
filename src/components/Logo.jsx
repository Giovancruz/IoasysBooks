import React from "react";
import { ReactComponent as LogoSvg } from "../static/images/Logo.svg";

const Logo = (props) => {
    return (
      <div className="logo">
        <LogoSvg />
        Books
      </div>
    );
}

export default Logo;