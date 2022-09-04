import React, { FC } from "react";
import InfoItem_1 from "./InfoItem_1";
import InfoItem_2 from "./InfoItem_2";
import InfoItem_3 from "./InfoItem_3";
import InfoItem_4 from "./InfoItem_4";
import InfoItem_5 from "./InfoItem_5";
import InfoItem_6 from "./InfoItem_6";
import InfoItem_7 from "./InfoItem_7";
import InfoItem_8 from "./InfoItem_8";
import InfoItem_9 from "./InfoItem_9";

const InfoList: FC = () => {
  return (
    <div className="w-full xl:max-w-[760px]">
      <InfoItem_1 />
      <InfoItem_2 />
      <InfoItem_3 />
      <InfoItem_4 />
      <InfoItem_5 />
      <InfoItem_6 />
      <InfoItem_7 />
      <InfoItem_8 />
      <InfoItem_9 />
    </div>
  );
};

export default InfoList;
