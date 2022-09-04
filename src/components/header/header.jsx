import React from "react";
import "./header.style.scss";
import Logo from "./headerLogo.svg";
import { FaShoppingCart } from "react-icons/fa";

function Header({ setShow, size }) {
  return (
    <div className="header">
      <div className="header__container">
        <img
          src={Logo}
          alt="Logo"
          className="header__logo"
          onClick={() => setShow(true)}
        />

        <div className="header__cartContainer">
          <FaShoppingCart
            className='header__shoppingBtn'
            onClick={() => setShow(false)}
          />
          <h4 className="header__cartSize">{size}</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
