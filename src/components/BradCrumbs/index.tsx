import React, { FC } from "react";
import { ArrowSvg } from "../../svgs/Arrow";

const BradCrumbs: FC = () => {
  return (
    <div className="w-full pt-[40px] lg:pt-[100px] pb-[30px] flex items-center space-x-[10px]">
      <p className="phone:text-lg text-white leading-[18px]">Home</p>
      <ArrowSvg color="white" rotate={270} />
      <p className="phone:text-lg text-white leading-[18px]">WEB DEVELOPMENT</p>
      <ArrowSvg color="white" rotate={270} />
      <p className="phone:text-lg text-white leading-[18px]">SERVICES</p>
    </div>
  );
};

export default BradCrumbs;
