import React from "react";
import { FaNode, FaReact } from "react-icons/fa";
import { SiJavascript, SiLaragon, SiMongodb, SiPrisma } from "react-icons/si";

const OurPowers = () => {
  return (
    <div>
      <div className="mt-14 text-center">
        <h2 className="text-4xl font-extrabold">Our Superpowers</h2>
      </div>
      <div className=" w-11/12 mx-auto grid grid-cols-2 text-4xl mt-12 text-red-700 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center gap-3">
        <div className="">
          <SiJavascript />
        </div>
        <div className="">
          <FaReact />
        </div>
        <div className="">
          <SiPrisma />
        </div>
        <div className="">
          <SiLaragon />
        </div>
        <div className="">
          <FaNode />
        </div>
        <div className="">
          <SiMongodb />
        </div>
      </div>
    </div>
  );
};

export default OurPowers;
