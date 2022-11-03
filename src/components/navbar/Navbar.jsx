import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "../button/Button";
import logo from "../../assets/logo.svg";
import "./navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="section navbar">
      <div className="row navbar__row">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar__items">
          <div className="navbar__items__menu">
            <a href="/">Pricing</a>
            <a href="/">Download</a>
            <a href="/">Integrations</a>
            <Button color="btn--black" text="Join free" />
          </div>
        </div>

        <div className="navbar__mobile-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={36}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={36}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar__mobile-menu__container">
              <div className="navbar__mobile-menu__container__links">
                <div className="navbar__mobile-menu__container__links__item">
                  <a href="/">Pricing</a>
                </div>

                <div className="navbar__mobile-menu__container__links__item">
                  <a href="/">Download</a>
                </div>

                <div className="navbar__mobile-menu__container__links__item">
                  <a href="/">Integrations</a>
                </div>
                <Button color="btn--black" text="Join free" />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
