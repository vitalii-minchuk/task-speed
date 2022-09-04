import React, { FC } from "react";
import FooterTopLeft from "./FooterTopLeft";
import FooterTopRight from "./FooterTopRight";

const FooterTop: FC = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row justify-between overflow-hidden rounded-t-[8px]">
        <FooterTopRight />
        <FooterTopLeft />
      </div>
    </div>
  );
};

export default FooterTop;
