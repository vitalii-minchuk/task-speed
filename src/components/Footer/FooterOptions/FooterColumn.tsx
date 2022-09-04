import React, { FC } from "react";
import { FooterColumnType } from "./footerOptionsData";

interface IFooterColumn {
  column: FooterColumnType;
}
const FooterColumn: FC<IFooterColumn> = ({ column }) => {
  return (
    <div className="pb-[30px] mx-auto">
        <p className="pb-[30px] text-white text-start text-[16px] uppercase sm:text-[24px] font-semibold">{column.title}</p>
      <div>
        {column.info.map((item, index) => (
            <p className="pb-[15px] text-white text-[12px] sm:text-[16px] text-start" key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
