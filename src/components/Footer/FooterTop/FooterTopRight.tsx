import Image from "next/image";
import React, { FC } from "react";
import FooterInput from "../FooterInput";

const FooterTopRight: FC = () => {
  return (
    <div className="flex-1 pt-[30px] pb-[83px] sm:pt-[74px] bg-myRed rounded-tr-[8px] rounded-tl-[8px] px-[15px] sm:px-[60px] xl:pl-[120px]">
      <div className="gap-[20px] lg:flex xl:block">
        <div>
          <div className="flex items-start gap-[15px] lg:gap-[39px]">
            <div className="w-[110px] phone:w-[163px]">
              <Image
                width={163}
                height={200}
                src={"/images/rocket.png"}
                alt="rocket"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-base phone:text-[24px] leading-[39px]">
                We've driven over
              </p>
              <div className="flex gap-[9px]">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="w-[25px] h-[40px] sm:w-[50px] xl:w-[66px] xl:h-[78px] grid place-content-center phone:rounded-[8px] bg-gradient-to-t from-[#CBDDFF] to-white">
                      <p className="text-myRed lg:text-[40px] font-semibold">6</p>
                    </div>
                  ))}
              </div>
              <p className="text-white font-semibold text-base phone:text-[24px] leading-[39px]">
                leads for clients.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="pb-6 text-white font-semibold text-base phone:text-[24px] leading-[39px]">
            Discover how we can help your business grow
          </p>
          <FooterInput />
        </div>
      </div>
    </div>
  );
};

export default FooterTopRight;
