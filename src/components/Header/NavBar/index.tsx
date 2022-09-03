import React, { useState } from "react";
import { ArrowSvg } from "../../../svgs/Arrow";

const NavBar = () => {
  return (
    <>
      <nav className="hidden xl:flex justify-between flex-1 pr-[20px] pl-[20px] desktop:pr-[60px] desktop:pl-[86px]">
        <div className="flex items-center space-x-[10px]">
          <p>SEO & Lead Generation</p>
          <ArrowSvg />
        </div>
        <div className="flex items-center space-x-[10px]">
          <p>Ecommerce</p>
          <ArrowSvg />
        </div>
        <div className="flex items-center space-x-[10px]">
          <p>UX & Interactive</p>
          <ArrowSvg />
        </div>
        <div className="flex items-center space-x-[10px]">
          <p>Our Technology</p>
          <ArrowSvg />
        </div>
        <div className="flex items-center space-x-[10px]">
          <p>Who We Are</p>
          <ArrowSvg />
        </div>
      </nav>
      <div className="flex flex-1 items-center justify-end pr-[20px] space-x-[10px] xl:hidden">
        <p>Menu</p>
        <ArrowSvg />
      </div>
    </>
  );
};

export default NavBar;
