import React from "react";
import blogPhoto from "../../assets/Photos/istockphoto-524718551-612x612.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
const ReadBlog = () => {
  return (
    <div className="mt-24">
      <div className="text-center my-14">
        <h4>Read Our Blog</h4>
        <h2 className="my-5 text-4xl font-extrabold">
          Read Daily news about startUp companies
        </h2>
      </div>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5">
        <div className="">
          <img src={blogPhoto} alt="Photo" className="rounded-lg" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
            <h2 className="font-bold text-3xl">Not other Framework</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              velit. Voluptatum eum adipisci accusantium quis illum doloribus
              reprehenderit voluptatibus cumque!
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <p className="flex items-center gap-3">
                <FaCheckCircle className="text-red-700" />
                Collaboration Tools
              </p>
              <p className="flex items-center gap-3">
                <FaCheckCircle className="text-red-700" />
                Collaboration Tools
              </p>
            </div>
            <button className="btn btn-circle">
              <GoArrowUpRight className="text-red-700 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="border border-red-700 px-4 py-1 cursor-pointer text-2xl rounded-xl mt-5 buttonCss text-white shadow-md shadow-red-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ReadBlog;
