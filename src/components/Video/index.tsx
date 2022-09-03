import React, { FC } from "react";
import Image from "next/image";
import VideoContent from "./VideoContent";

const VideoSection: FC = () => {
  return (
    <div className="container">
      <div className="bg-myRosa2 px-[15px] pb-[40px]">
        <h2 className="fontSubTitle text-center py-[60px]">
          Is your website optimized for speed?
        </h2>
        <div className="max-w-[1000px] mx-auto">
          <p className="font20 text-center pb-[40px]">
            Want to improve your website's user experience and rankings by
            increasing its speed? Muscled is always ready to help you. We
            provide three different website speed optimization service packages
            that can assist your website in loading at top speeds. Some of the
            benefits of using our services include a lower bounce rate and
            increased time on the page.
          </p>
          <p className="font20 text-center pb-[40px]">
            Besides this, conversions and even revenue will increase year over
            year.
          </p>
          <p className="font20 text-center pb-[40px]">
            We understand that sometimes you want to speak directly to the
            website. Contact us to speak with an expert.
          </p>
        </div>
      </div>
      <div className="bg-black px-[15px] pb-[40px] xl:pb-[135px] pt-[80px]">
        <div className="flex flex-col gap-[30px] xl:flex-row justify-between items-center max-w-[1240px] mx-auto">
          <VideoContent />
          <div className="w-full xl:w-[570px] grid items-center">
            <Image
              src="/images/videoPlayer.png"
              width={570}
              height={430}
              alt="video player"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
