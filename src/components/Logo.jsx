import React, { Component } from "react";
import { ReactComponent as LogoSvg } from "../static/images/Logo.svg";

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <LogoSvg />
        Books
      </div>
    );
  }
}

export default Logo;