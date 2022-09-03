import React, { FC } from "react";
import PackageCard from "./PackageCard";
import { packages } from "./packagesData";

const Packages: FC = () => {
  return (
    <div className="container bg-myLightGray">
      <div className="px-[15px] mx-auto max-w-[1240px] mb-3">
        <h2 className="fontSubTitle text-center py-[60px]">
          Explore Site Speed Optimization Service Packages
        </h2>
        <div className="flex justify-between flex-wrap desktop:flex-nowrap gap-[20px] w-full pb-[60px]">
          {packages.map((packageCard) => (
            <PackageCard key={packageCard.title} packageCard={packageCard} />
          ))}
        </div>
        <div className="flex justify-center">
          <a className="font24 text-myLinkColor cursor-pointer">
            See Full Deliverables
          </a>
        </div>
      </div>
    </div>
  );
};

export default Packages;
