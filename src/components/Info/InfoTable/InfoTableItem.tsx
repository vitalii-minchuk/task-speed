import React, { FC } from "react";
import { InfoTableDataType } from "./infoTableData";

interface IInfoTableItem {
    data: InfoTableDataType
}
const InfoTableItem: FC<IInfoTableItem> = ({data}) => {
  return (
    <div className="flex items-center gap-[10px] my-[20px]">
      <div>
        <div>
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-5.84694e-06 8.57143L3.57142 5L-6.47138e-06 1.42857L0.714279 4.37114e-07L5.71428 5L0.71428 10L-5.84694e-06 8.57143Z"
              fill="black"
              fillOpacity="0.8"
            />
            <path
              d="M6.14257 8.57143L9.714 5L6.14257 1.42857L6.85686 4.37114e-07L11.8569 5L6.85686 10L6.14257 8.57143Z"
              fill="black"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      </div>
      <div>
        <p>{data.infoItem}</p>
      </div>
    </div>
  );
};

export default InfoTableItem;
