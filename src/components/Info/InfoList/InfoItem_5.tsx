import React, { FC } from "react";

const InfoItem_5: FC = () => {
  return (
    <div>
      <h2 className="fontSubTitle pb-[40px]">
        Three website optimization tools to improve page speed
      </h2>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Do you want to learn how to optimize the speed of your website? Here are
        a few of our favorite web optimization tools for determining your site's
        page speed and determining what needs to be done to improve it.
      </p>
      <p className="font20Bold pb-[10px]">1. Google Search Console</p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Google Search Console is probably the best free tool for assisting you
        with your website speed optimization efforts. It provides you with all
        of the valuable information you need to thoroughly measure your website
        traffic, understand your site's performance, and get advice on how to
        fix the most visible issues on your website.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Google Search Console now includes the Core Web Vitals report. The Core
        Web Vitals (CWV) are a set of metrics introduced by Google recently to
        measure user experience. The three web essentials are:
      </p>
      <ul className="list-disc pl-[30px] pb-[20px] phone:pb-[40px]">
        <li className="font20">
          <span className="font20Medium">
            The Largest Contentful Paint (LCP)
          </span>{" "}
          metric measures the time it takes for the page's main content to
          become visible in comparison to when the page first loaded.
        </li>
        <li className="font20">
          <span className="font20Medium">First Input Delay (FID)</span> is a
          load responsiveness metric that calculates the time between when a
          user first interacts with a page and when the browser can respond to
          that interaction.
        </li>
        <li className="font20">
          <span className="font20Medium">Cumulative Layout Shift (CLS)</span>{" "}
          involves measuring graphic stability, or how much a page's layout
          moves unexpectedly.
        </li>
      </ul>

      <p className="font20Bold pb-[10px]">2. Pingdom</p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        When it comes to page optimization, Pingdom has a lot of information.
        First, it offers reports split into four sections. It provides
        information such as a performance grade, the page's history, an
        analysis, and much more. They also offer some suggestions for where you
        can improve your website.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        If you want to know how fast your websites are from different parts of
        the world, Pingdom lets you check your page speed from Dallas,
        Melbourne, San Jose, and Stockholm, Sweden. This is extremely useful if
        you have clients from all over the world.
      </p>
      <p className="font20Bold pb-[10px]">3. Muscled SEO Checker</p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        Muscled has developed our own specialized SEO checker tool that can
        assist with page optimization recommendations.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        You can use our tool to enter the URL of your website, the keyword you
        want to check for, and your email address. When you enter your email
        address, you will receive a full PDF copy of the results.
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        One of the best features of the tool? You can include a competitor's URL
        to see how it compares to yours!
      </p>
      <p className="font20 pb-[20px] phone:pb-[40px]">
        When you receive your customized PDF document, you will not only gain
        insight into your page speed, but also a variety of other metrics such
        as image analysis, title and description tag audit, copy and code
        analysis, and much more.
      </p>
    </div>
  );
};

export default InfoItem_5;
