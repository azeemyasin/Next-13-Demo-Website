import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-[url(/img/bannerBg.png)] h-screen bg-center bg-cover w-full bg-no-repeat">
        <div className="2xl:w-1/2 lg:w-3/4 md:w-full w-full h-[90%] flex flex-col justify-center lg:items-center">
          <div className="md:w-3/5 w-4/5 text-center space-y-24 flex flex-col items-center lg:ml-0 ml-8">
            <h1 className="md:mt-0 mt-28 xl:text-7xl text-5xl font-black text-white font-mono italic">DEMO-WEBSITE</h1>
            <div className="text-white space-y-5 sm:w-full w-56">
              <p className="text-center text-5xl md:font-normal font-light">
               Lorem ipsum dolor
              </p>
              <p className="md:text-5xl sm:text-4xl text-2xl">
              consectetur adipis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
