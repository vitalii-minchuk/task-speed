import Image from "next/image";
import React, { FC } from "react";
import { ArrowSvg } from "../../svgs/Arrow";
import NavBar from "./NavBar";

const wrapper = "";
const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <div className="w-full h-[60px] phone:h-[100px] bg-white px-[15px] xl:px-[25px] desktop:px-[50px] flex justify-between items-center space-x-2">
          <div className="grid items-center">
            <Image
              src="/images/MUSCLED.png"
              alt="log"
              width={"122,22px"}
              height={"17,38px"}
            />
          </div>
          <NavBar />
          <button className="btnRounded hidden phone:block">
            Get Free Proposal
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
