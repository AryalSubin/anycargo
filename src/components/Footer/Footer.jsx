import React from "react";
import logo from "../../assets/logo1.png";

const Footer = () => {
  return (
    <div className="text-center pb-16 pt-8 bg-gray-300">
      <div>
        <div className="flex my-8 justify-center">
          <img className="h-[80px] w-[80px]" src={logo} alt="logo" />
        </div>
        <div className="text-gray-500 text-xs">
          <p>Copywrite @ 2024 / All rights reserved</p>
          <p>Designed by WebX</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
