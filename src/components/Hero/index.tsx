import Image from "next/image";
import React, { FC } from "react";
import BradCrumbs from "../BradCrumbs";
import HeroContent from "./HeroContent";

const Hero: FC = () => {
  return (
    <div className="container bg-myGray7 px-[15px]">
      <div className="mx-auto pb-[40px] lg:pb-[100px] max-w-[1240px]">
        <BradCrumbs />
        <div className="column lg:flex justify-between items-center">
          <HeroContent />
          <div className="grid items-center lg:mb-[25px]">
            <Image
              width={540}
              height={446}
              src="/images/heroImg.svg"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
