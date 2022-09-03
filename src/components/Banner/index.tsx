import Image from "next/image";
import React, { FC } from "react";

const Banner: FC = () => {
  return (
    <div className="container bg-white">
      <div className="py-[50px] mx-auto max-w-[1240px]">
        <h5 className="font24Bold text-myGray5 text-center mb-[20px]">
          Our Partners
        </h5>
        <div className="flex flex-wrap justify-between items-center gap-4 px-[15px]">
          <Image
            style={{ display: "block" }}
            width={138}
            height={36}
            src={"/images/Logo1.png"}
            alt="small logo"
          />
          <Image
            style={{ display: "block" }}
            width={154}
            height={34}
            src={"/images/Logo2.png"}
            alt="small logo"
          />
          <Image
            style={{ display: "block" }}
            width={170}
            height={41}
            src={"/images/Logo4.png"}
            alt="small logo"
          />
          <Image
            style={{ display: "block" }}
            width={163}
            height={42}
            src={"/images/Logo5.png"}
            alt="small logo"
          />
          <Image
            style={{ display: "block" }}
            width={100}
            height={51}
            src={"/images/Logo6.png"}
            alt="small logo"
          />
          <Image
            style={{ display: "block" }}
            width={147}
            height={46}
            src={"/images/Logo7.png"}
            alt="small logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
