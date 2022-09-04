import React, { FC } from "react";
import SmallCard from "./SmallCard";
import { smallCards } from "./smallCardData";

const SmallCardsSection: FC = () => {
  return (
    <div className="container bg-myLightGray">
      <div className="flex justify-between flex-wrap xl:flex-nowrap gap-[40px] px-[15px] pb-[100px] max-w-[1240px] mx-auto">
        {smallCards.map((card, index) => (
          <SmallCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default SmallCardsSection;
