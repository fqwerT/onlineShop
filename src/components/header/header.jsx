import React from "react";
import "./header.style.scss";
import Logo from "./headerLogo.svg";


function Header({ setShow}) {
  return (
    <div className="header">
      <div className="header__container">
        <img
          src={Logo}
          alt="Logo"
          className="header__logo"
          onClick={() => setShow(true)}
        />

        </div>
      </div>
  );
}

export default Header;
