import React, { FC } from "react";
import { SmallCardType } from "./smallCardData";

interface ISmallCard {
    card: SmallCardType
}
const SmallCard: FC<ISmallCard> = ({card}) => {
  return (
    <div className="flex-grow w-[390px] pt-[30px] px-[30px] bg-myRosa4">
      <h6 className="font24Medium pb-[40px]">{card.name}</h6>
      {card.info?.map((item, index) => (
        <p key={index} className="font20 pb-[30px]">{item}</p>
      ))}
    </div>
  );
};

export default SmallCard;
