import Image from "next/image";
import React, { FC } from "react";
import FooterColumn from "./FooterColumn";
import { footerColumn } from "./footerOptionsData";

const FooterOPtions: FC = () => {
  return (
    <div className="container bg-[#141010]">
      <div className="px-[15px] phone:px-[30px] lg:px-0 pt-[40px] pb-[80px] lg:pt-[74px] lg:pb-[148px] mx-auto max-w-[1240px]">
        <div className="lg:flex flex-row-reverse justify-between">
          <div className="pb-[40px] flex flex-col items-center lg:block">
            <p className="pb-[20px] text-white uppercase text-[14px] text-right">
              REVENUE DRIVEN FOR OUR CLIENTS
            </p>
            <p className="text-white text-[30px] text-right">$3,021,182,299</p>
          </div>
          <div className="phone:flex gap-[40px] flex-wrap">
            {footerColumn.map((column) => (
              <FooterColumn key={column.title} column={column} />
            ))}
          </div>
        </div>
        <div className="h-[1px] mx-[-30px] bg-white"></div>
        <div className="pt-[61px] flex flex-wrap xl:flex-nowrap gap-[50px]">
          <div className="">
            <p className="pb-[20px] text-white text-[14px] text-start">
              WebFX® 1995-2022 | Celebrating 25+ Years of Digital Marketing
              Excellence
            </p>
            <p className="text-white text-[14px] text-start">Call Toll Free: 508-504-9466 Privacy & Terms of Use Sitemap </p>
          </div>
          <div className="flex flex-wrap desktop:flex-nowrap justify-between items-center gap-[24px]">
              <Image width={138} height={50} src={"/images/footer1.png"} alt="footer logo" />
              <Image width={86} height={84} src={"/images/footer2.png"} alt="footer logo" />
              <Image width={61} height={60} src={"/images/footer3.png"} alt="footer logo" />
              <Image width={114} height={58} src={"/images/footer4.png"} alt="footer logo" />
              <Image width={179} height={48} src={"/images/footer5.png"} alt="footer logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOPtions;
