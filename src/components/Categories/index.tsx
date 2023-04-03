import React from "react";
import CategoriesCards from "@/components/Categories/CategoriesCards";

const Categories: React.FC = () => {
  return (
    <div className="h-full pt-20">
      <div className="xl:container mx-auto 2xl:w-full w-11/12 p-0">
        <div className="md:block hidden">
          <img
            src="/img/placeholder3.png"
            alt=""
            className="w-full lg:h-44 h-32"
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <h1 className="uppercase text-myBlue text-center font-semibold xl:text-xl md:text-[11px] text-xl pt-10 pb-3 tracking-[0.2em]">
            categories 
          </h1>
          <h1 className="text-white xl:text-4xl text-[20px] font-semibold text-center pb-10 w-full flex md:flex-row flex-col justify-center">
          Straight to your ears one of the best in the middle
          </h1>
        </div>
        <CategoriesCards />
      </div>
    </div>
  );
};

export default Categories;
