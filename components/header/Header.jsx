import React from "react";
import "./header.css";
import MenuBar from "./MenuBar";
import HeaderSocials from "./HeaderSocials";
import Avatar from "../../assets/Avatar.png";
import Vector01 from "../../assets/Vector01.png";
import Vector02 from "../../assets/vector2.jpg";
import Vector03 from "../../assets/vector03.jpg";

const Header = () => {
  return (
    <header>
      <img src={Vector01} className="vector1" alt="" />
      <img src={Vector03} className="vector2" alt="" />

      <div className="header__container">
        <MenuBar />
        <div className="container-wrapper">
          <img src={Avatar} className="avatar" alt="avatar" />
          <div className="opener-text-box">
            <h1>Aunchisa Suwanchatree</h1>
            <h3>Hello! everyone. I am Cream.</h3>
            <h3>A 3rd-year computer engineering. </h3>
            <h3>I would like to design and create something useable.</h3>
          </div>
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
