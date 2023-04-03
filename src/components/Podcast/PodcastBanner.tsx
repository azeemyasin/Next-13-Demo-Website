import React from "react";

const PodcastBanner: React.FC = () => {
  return (
    <>
      <div className="h-screen w-full flex md:flex-row flex-col-reverse">
        <div className="md:w-3/5 w-full md:h-full h-1/2 lg:pt-48 2xl:pl-40 xl:pl-28 lg:pl-10 lg:p-0 sm:p-2 text-white flex flex-col lg:items-start items-center lg:justify-start justify-center">
          <div className="lg:h-full h-3/4">
            <h1 className="xl:text-3xl lg:text-2xl text-[16px] font-semibold text-[#5A5B68] lg:pb-5 sm:pb-2 pb-1">
              Pre Title
            </h1>
            <h1 className="xl:text-5xl lg::text-3xl text-[23px] font-semibold tracking-wide sm:pb-2">
              Podcast Title Here
            </h1>
            <h1 className="xl:text-5xl sm:text-3xl text-xl font-semibold tracking-wide sm:pb-10 pb-2">
              Podcast Description
            </h1>
            <div className="rounded-full flex items-center gap-4 lg:pb-16 md:pb-14 sm:pb-5 pb-10">
              <img src="/img/profile.png" alt="" className="h-14 w-14" />
              <p className="text-lg font-semibold">John Ethism</p>
            </div>
            <div className="md:block hidden lg:pb-48 pb-20">
              <button className="h-12 w-48 bg-red-600 flex justify-center items-center gap-3 rounded-lg">
                <p>Click for details</p>
                <img src="/img/fillPlayBtn.png" alt="" />
              </button>
            </div>
            
          </div>
        </div>
        <div className="lg:w-1/2 md:w-2/5 w-full md:h-full sm:h-1/2 h-2/5 flex justify-center items-center mr-10">
          <img
            src="/img/radioBanner.png"
            alt=""
            className="lg:h-96 md:h-[20rem] sm:h-[15rem] md:w-96 sm:w-80 w-[60%]"
          />
        </div>
      </div>
    </>
  );
};

export default PodcastBanner;
