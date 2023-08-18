import React from "react";

const Navbar = () => {
  return (
    <div className="grid grid-flow-col bg-green-200 h-8   ">
      <div className="flex">
        <div>Categories</div>
        <div>Post Your Requirement</div>
        <div className="col-span-10 rounded-full border border-black  text-grey w-32 ">
          Become a seller
        </div>
      </div>
    </div>
  );
};

export default Navbar;
