import React, { FC } from "react";

const InfoItem_1: FC = () => {
  return (
    <div>
      <h2 className="fontSubTitle pb-[40px]">
        The difference between page and site speed
      </h2>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Page speed and site speed both refer to how quickly your website's
        content loads, but there is a technical distinction between the two
        terms.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Page speed describes how quickly the content on certain page loads. It
        can be properly defined:
      </p>
      <ul className="list-disc pl-[30px] pb-[20px] phone:pb-[40px]">
        <li>
          <span className="font20Bold">Page load time:</span> The amount of time it takes to fully
          display the content of a page.
        </li>
        <li>
          <span className="font20Bold">Time to the first byte:</span> The amount of time it takes for a
          browser to receive the first bit of information from your server
        </li>
      </ul>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        The speed at which your entire website loads is measured as site speed.
        It is calculated by averaging the page speed of a sample of your site's
        page views.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Website speed is a broader term that refers to how quickly your site
        loads and can be used synonymously with site speed.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Page speed, site speed, and website speed are all closely related terms
        that affect your site's user experience and rankings. export default
        InfoItem_1;
      </p>
    </div>
  );
};

export default InfoItem_1;
