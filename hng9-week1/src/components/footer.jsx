import React from "react";
import zuri from "../assets/zuri.png";
import I4G from "../assets/I4G.png";

const Footer = () => {
  return (
    <div className="lg:flex lg:justify-between my-8">
      <div>
        <img src={zuri} alt="" className="flex w-fit" />
      </div>
      <p className="my-4 lg:my-0 text-[#667085] text-sm font-normal">
        HNG Internship 9 Frontend Task
      </p>
      <div>
        <img src={I4G} alt="" className="flex w-fit lg:w-32"/>
      </div>
    </div>
  );
};

export default Footer;
