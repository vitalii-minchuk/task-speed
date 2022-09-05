import Image from "next/image";
import React, { FC } from "react";

const FooterContact: FC = () => {
  return (
    <div className="container relative z-20 mt-[-57px] bg-myDarkRed2 overflow-hidden rounded-t-[16px] sm:rounded-t-[57px]">
      <div className="py-[40px] mx-auto max-w-[1240px]">
        <div className="px-[15px] xl:px-0 flex justify-between items-center gap-[30px] flex-wrap">
          <div className="grid place-content-center mb-[20px] border-[13px] border-myDarkRed1 rounded-full">
            <Image
              width={112}
              height={112}
              alt="avatar"
              src={"/images/avatar.png"}
            />
          </div>
          <div className="pb-[20px] phone:flex-1">
            <p className="text-white pb-[20px] xl:text-[18px] font-semibold">
              Ready to speak with a marketing expert? Give us a ring
            </p>
            <p className="text-white text-bold text-2xl xl:text-[40px] font-semibold">
              508-504-9466
            </p>
          </div>
          <div className="w-full lg:flex-1 phone:flex justify-between items-start gap-[20px]">
            <div className="w-full pb-[20px] text-end">
              <p className="text-white text-lg">1.6 million</p>
              <p className="text-white">Hours of expertise</p>
            </div>
            <div className="w-full pb-[20px] text-end">
              <p className="text-white font-semibold">450+</p>
              <p className="text-white">Digital Marketing Masters On Staff</p>
            </div>
            <div className="w-full pb-[20px] text-end">
              <p className="text-white font-semibold">1,128</p>
              <p className="text-white">Website Launched</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
