import React from "react";
import * as Icons from "@/components/global/Icons";

const Contact: React.FC = () => {
  return (
    <>
      <div className="2xl:h-screen h-full w-full">
        <div className="2xl:pt-28 pt-20 h-1/2 w-full sm:flex hidden flex-col items-center bg-myBrown">
          <h1 className="text-white lg:text-4xl text-2xl 2xl:pb-10 pb-3">
            Footer Title
          </h1>
          <p className="text-[#61626F] 2xl:w-[51%] xl:w-3/5 w-4/5 text-center 2xl:leading-10 xl:leading-8 leading-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="bg-[#00001D] sm:h-1/2 h-full w-full flex flex-col items-center sm:justify-between justify-between">
          <div className="2xl:w-1/4 sm:w-3/5 w-11/12 lg:pt-28 sm:pt-6 pt-20">
            <h1 className="tracking-[5px] text-myBlue md:text-base text-xl font-semibold text-center">
              Contact Us
            </h1>
            <p className="text-white text-center sm:mt-4 mt-4 md:leading-8 sm:text-base text-base lg:pb-10 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit debitis quasi, porro expedita totam ex recusandae eligendi, ratione minus vitae.
            </p>
          </div>
          <div className="flex md:justify-between justify-center 2xl:w-3/5 lg:w-3/4 w-[85%] lg:pt-0 pt-8 sm:flex-row flex-col-reverse">
            <div className="flex justify-center">
              <h4 className="text-white text-2xl font-semibold font-serif">Footer Logo</h4>
            </div>
            <p className="text-[#61626F] lg:w-80 w-72 text-center lg:text-base text-sm lg:ml-32 sm:block hidden">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, recusandae.
            </p>
            <div className="md:space-y-4">
              <h1 className="text-white text-center md:text-base text-2xl md:pb-0 pb-5">
                Follow us
              </h1>
              <div className="flex sm:gap-4 gap-8 md:pb-0 sm:pb-16 pb-8 md:justify-start justify-center">
                <div className="bg-blue-600 lg:h-9 h-8 lg:p-0 p-3 lg:w-9 w-8 flex justify-center items-center rounded-full">
                  <Icons.FacebookIcon />
                </div>
                <div className="bg-blue-400 lg:h-9 h-8 lg:p-0 p-2 lg:w-9 w-8 flex justify-center items-center rounded-full text-white fill-current">
                  <Icons.TwitterIcon />
                </div>
                <div className="bg-orange-400 lg:h-9 h-8 lg:p-0 p-2 lg:w-9 w-8 flex justify-center items-center rounded-full">
                  <Icons.InstagramIcon />
                </div>
                <div className="bg-red-600 lg:h-9 h-8 lg:p-0 p-2 lg:w-9 w-8 flex justify-center items-center rounded-full">
                  <Icons.YoutubeIcon />
                </div>
              </div>
            </div>
          </div>
          <p className="text-white sm:text-sm text-xs mt-5">
              Copyright © DEMO-WEB
            </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
