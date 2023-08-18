import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { MdCall } from "react-icons/md";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 bg-teal-600 shadow-lg h-20">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="vstar-logo"
          src="https://vistaartrade.com/_next/static/media/vistaarwhitelogo.2eb7e15f.webp"
        />
      </div>
      <div className="col-span-10 text-center px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-full"
          type="text"
        />
        <button className="border border-gray-400 px-2 py-2">
          <BsSearch className=" rounded-full h-6 w-12" />
        </button>
      </div>
      <div className="col-span-10">
        <button className="border border-gray-400 rounded-full w-32 bg-white p-2">
          LogIn
        </button>
      </div>
      <button className="col-span-10 rounded-full border border-white  text-white w-32">
        Register
      </button>
      <div className="flex col-span-1 right">
        <MdCall className=" fill-white text-white h-5 text-2xl" />{" "}
        <div className="text-white h-6 "> + 977 9822783677</div>
      </div>
      <div className="flex col-span-1 right">
        <RxHamburgerMenu className=" fill-white text-white h-5 text-2xl" />
      </div>
    </div>
  );
};

export default Header;
