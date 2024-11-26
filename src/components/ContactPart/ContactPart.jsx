import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const ContactPart = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-24 gap-6 w-11/12 mx-auto">
      <div className="">
        <p>Got a project in mind ?</p>
        <h1 className="text-3xl font-bold my-4">Reserve a Call</h1>
        <p className="flex items-center gap-3">
          <FaCheckCircle className="text-red-700 text-xl" />
          An in depth session to understand your needs.
        </p>
        <p className="flex items-center gap-3 my-2">
          <FaCheckCircle className="text-red-700" />
          Learn Which plan is write for your team.
        </p>
        <p className="flex items-center gap-3">
          <FaCheckCircle className="text-red-700 " />
          Get on boarding help.
        </p>
        <p className="mt-10">Technical support or some query ?</p>
        <p className="flex items-center gap-3">
          contact us
          <HiOutlineArrowRight className="text-red-700" />
        </p>
      </div>
      <div className="border border-red-700 shadow-md shadow-red-600 rounded-md p-2">
        <h2 className="text-2xl font-extrabold border-b border-red-700">
          Tell us about yourself
        </h2>
        <form className="">
          <label htmlFor="name" className="mt-4">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100  text-sm outline-red-700"
          />
          <label htmlFor="Email" className="mt-4">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100  text-sm outline-red-700"
          />
          <label htmlFor="company" className="mt-4">
            Company size
          </label>
          <input
            type="text"
            name="company"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm outline-red-700"
          />
          <label htmlFor="help" className="mt-4">
            How can we help ?
          </label>
          <textarea
            placeholder="Message"
            rows="6"
            name="help"
            className="w-full rounded-md px-4 text-gray-800 bg-gray-100  text-sm pt-3 outline-red-700"
          ></textarea>
          <div className="flex items-center justify-between bg-red-700 rounded-md p-4 bg-opacity-25 mt-0">
            <a href="#">You can also Email Us At Apac@RedTiIt.Team</a>
            <button className="buttonCss px-4 rounded-xl text-white py-1 shadow-md shadow-red-600">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPart;
