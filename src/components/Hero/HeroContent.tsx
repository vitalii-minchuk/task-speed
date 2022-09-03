import React from "react";
import HeroActions from "./HeroActions";

const HeroContent = () => {
  return (
    <div className="w-full lg:w-[500px] xl:w-[640px]">
      <h1 className="fontTitle mb-[20px]">
        Services for <br /> Improving Site Speed
      </h1>
      <p className="font20 text-white mb-[30px]">
        Website speed optimization services are an often-overlooked strategy for
        great SEO. Your website will probably lose sales and income if it does
        not load quickly for visitors. Almost half of the web searchers will
        abandon a site after three seconds of waiting for it to load. Is your
        website fast enough to keep users coming back? If not, Muscled site
        speed optimization services can help. To speak with a specialist, please
        contact us.
      </p>
      <HeroActions />
    </div>
  );
};

export default HeroContent;
