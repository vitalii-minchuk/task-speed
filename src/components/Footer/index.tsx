import React, { FC } from "react";
import FooterContact from "./FooterContacts";
import FooterOPtions from "./FooterOptions";
import FooterTop from "./FooterTop";

const Footer: FC = () => {
  return (
    <footer>
      <div className="container overflow-hidden mt-[-8px]">
        <FooterTop />
        <FooterContact />
        <FooterOPtions />
      </div>
    </footer>
  );
};

export default Footer;
