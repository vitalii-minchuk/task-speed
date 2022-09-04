import React from "react";
import InfoList from "./InfoList";
import InfoTable from "./InfoTable";

const InfoSection = () => {
  return (
    <div className="container bg-myLightGray">
      <div className="py-[80px] flex flex-col gap-[40px] xl:flex-row-reverse justify-between items-start px-[15px] max-w-[1240px] mx-auto">
        <InfoTable />
        <InfoList />
      </div>
    </div>
  );
};

export default InfoSection;
