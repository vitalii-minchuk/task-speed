import React, { FC } from "react";
import BigTable from "./BigTable";
import { table1Data, table2Data } from "./tableData";

const TableSection: FC = () => {
  return (
    <div className="container bg-myLightGray">
      <div className="px-[15px] max-w-[1240px] mx-auto">
        <h2 className="fontSubTitle text-center pt-[50px] phone:pt-[150px] pb-[30px]">
          Muscled provides Site Speed Optimization Services
        </h2>
        <p className="font24 text-center pb-[50px] phone:pb-[120px]">
          To view additional website speed optimization plans, swipe to the
          right on the table below.
        </p>
        <BigTable data={table1Data} />
        <BigTable data={table2Data} />
      </div>
    </div>
  );
};

export default TableSection;
