import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="  w-96 flex-shrink-0 md:mx-1/2 mx-auto text-center md:text-left">
            <div className="flex col-span-3 ">
              <img
                className=" h-24 w-99"
                alt="vstar-logo"
                src="https://vistaartrade.com/_next/static/media/vistaarwhitelogo.2eb7e15f.webp"
              />
            </div>
            <h1 className="mt- text-sm text-white text-left ">
              Got Question? Call us 24/7 +977 9822783677{" "}
            </h1>
            <h2 className="mt- text-sm text-white text-left ">
              {" "}
              Nepals First Online B2B Marketplace
            </h2>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 flex col-span-3">
                Company
              </h2>
              <ul>
                <li>About Us</li>
                <li>Terms and Condition</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
                <li>Our Blogs</li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                My Account
              </h2>
              <ul>
                <li>Login</li>
                <li>Register</li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Top Categories
              </h2>
              <ul>
                <li>Building and Constructions</li>
                <li>Industrial Supplies</li>
                <li>Furniture and Furnishing</li>
                <li>Consumer Electronics</li>
                <li>Houseware Supplies</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <h2 className=" text-white text-center ">
              Copyright © 2023 Vistaar Trade. All Rights Reserved.
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
