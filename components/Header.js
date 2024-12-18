import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="headerBackground">
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbarContainer">
        <div className="logoContainer">
          <img
            className="logoContainer__img"
            src=".\img\imgSite\logo webzh white.png"
            alt="Webzh Agence, création de site web tout simplement"
          />
          <Link href="/" className="logoContainer__text">
            Webmtl Agence
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
