import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full flex items-center justify-between p-3 bg-red-600 bg-opacity-35 rounded-tl-xl rounded-tr-xl">
      <div className="text-white">
        <h2 className="text-2xl font-bold">Newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          corrupti?
        </p>
      </div>
      <div className="">
        <button className="buttonCss px-4 rounded-xl text-white py-1 shadow-md shadow-red-600">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
