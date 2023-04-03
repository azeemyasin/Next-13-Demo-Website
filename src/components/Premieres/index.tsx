import React from "react";
import PremiereSlider from "@/components/Premieres/PremiereSlider";

const Premieres: React.FC = () => {
  return (
    <>
      <div className="md:h-screen h-full">
        <div className="space-y-8 h-full sm:pt-0 pt-24 md:flex flex-col justify-center">
          <h1 className="2xl:container mx-auto text-white text-center lg:text-4xl text-[21px] pt-8">
          Releases of the day
          </h1>
          <div className="lg:p-10 flex items-center">
            <PremiereSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Premieres;
