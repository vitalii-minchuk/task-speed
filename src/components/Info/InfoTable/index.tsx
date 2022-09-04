import React, { FC } from "react";
import { ArrowSvg } from "../../../svgs/Arrow";
import { infoTableData } from "./infoTableData";
import InfoTableItem from "./InfoTableItem";

const InfoTable: FC = () => {
  return (
    <div className="w-full overflow-hidden xl:max-w-[440px] xl:min-w-[440px] border border-myGray3 rounded-[10px]">
      <div className="h-[60px] px-2 phone:px-[30px] bg-myLightGray2 flex justify-between items-center">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              rx="5"
              fill="black"
              fillOpacity="0.8"
            />
            <path
              d="M20 9.77778H7.55556V8H20V9.77778ZM20 13.3333H7.55556V11.5556H20V13.3333ZM20 16.8889H7.55556V15.1111H20V16.8889ZM5.77778 16.8889H4V15.1111H5.77778V16.8889ZM5.77778 8V9.77778H4V8H5.77778ZM5.77778 13.3333H4V11.5556H5.77778V13.3333Z"
              fill="white"
            />
          </svg>
        </div>
        <h5 className="font20Bold flex-1 pl-[10px]">Table of Contents</h5>
        <div>
          <ArrowSvg />
        </div>
      </div>
      <div className=" px-2 phone:px-[30px]">
        {infoTableData?.map((item, index) => (
          <InfoTableItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default InfoTable;
