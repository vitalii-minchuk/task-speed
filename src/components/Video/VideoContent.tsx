import React, { FC } from "react";

const VideoContent: FC = () => {
  return (
    <div className="w-full xl:w-[560px]">
      <p className="font24 leading-[150%] text-white pb-[30px]">
        “Muscled has gone above and beyond to make me happy. So far, after a few
        months, I have already seen significant improvement in rankings and
        conversions, and they have also greatly improved the speed of my site.”
      </p>
      <p className="font24Bold leading-[150%] text-white pb-[30px]">Sara Feldstein</p>
      <p className="font20 text-white  pb-[60px]">Barumba</p>
      <button className="btnStandardRed phone:min-w-[376px]">See Our Clients’ Testimonials</button>
    </div>
  );
};

export default VideoContent;
