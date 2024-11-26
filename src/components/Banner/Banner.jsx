import React from "react";
import { BiLogoGoogleCloud, BiMouse } from "react-icons/bi";
import { CiRainbow } from "react-icons/ci";
import { FaDigitalOcean, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { LiaLinode } from "react-icons/lia";
import { SiCloudflare } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import "./banner.css";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/ZxsSyNC/images.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-full mt-36 text-white">
          <h1 className="mb-5 text-5xl font-bold">
            From concept to code <br />
            <span className="text-red-600">We Make It Happen</span>
          </h1>
          <p className="mb-5">
            We Help Brands And B2B Enterprises Build Amazing <br />
            Website That Convert Their Visitors To Paying Customers.
          </p>
          <button className="bn-gradient cursor-pointer shadow-2xl shadow-[#ff6969]">
            <FaPhoneAlt /> lets have a call
          </button>
          <div className="text-center w-full flex gap-2 flex-col items-center justify-center mt-6">
            <div className="">
              <BiMouse className="text-3xl" />
            </div>
            <div className="text-red-700">
              <IoEllipsisVerticalOutline />
              <IoEllipsisVerticalOutline />
              <IoEllipsisVerticalOutline />
              <IoEllipsisVerticalOutline />
              <IoEllipsisVerticalOutline />
              <IoEllipsisVerticalOutline />
              <IoEllipsisVerticalOutline />
              <IoEllipsisVerticalOutline />
              <IoEllipsisVerticalOutline />
            </div>
            <h2 className="uppercase font-light text-sm">
              Trusted By Our partners
            </h2>
            <div className="flex items-center justify-evenly gap-6 flex-col md:flex-row w-full pb-4">
              <div className="flex items-center flex-col">
                <FaDigitalOcean className="text-3xl" />
                <p className="text-sm">Digital Ocean</p>
              </div>
              <div className="flex items-center justify-center gap-1 flex-col">
                <TbBrandAzure className="text-3xl" />
                <p className="text-sm">Azure</p>
              </div>
              <div className="flex items-center justify-center gap-1 flex-col ">
                <FaGithub className="text-3xl" />
                <p className="text-sm">Github</p>
              </div>
              <div className="flex items-center justify-center gap-1 flex-col">
                <BiLogoGoogleCloud className="text-3xl" />
                <p className="text-sm">Google cloud</p>
              </div>
              <div className="flex items-center justify-center gap-1 flex-col">
                <LiaLinode className="text-3xl" />
                <p className="text-sm">Linode</p>
              </div>
              <div className="flex items-center justify-center gap-1 flex-col">
                <SiCloudflare className="text-3xl" />
                <p className="text-sm">CloudFLare</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:flex items-center justify-between text-9xl text-red-800 opacity-60 w-full hidden">
        <CiRainbow className="-rotate-[90deg]" />
        <CiRainbow className="rotate-[90deg]" />
      </div>
    </div>
  );
};

export default Banner;
