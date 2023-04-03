import React, { useRef } from "react";
import Slider from "react-slick";
import { IPremieresCards } from "@/interfaces";
import { premieresCardData } from "@/mock/PremieresMockData";

const PremiereSlider: React.FC = () => {
  const settings = {
    dots: false,
    Infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  let sliderRef = useRef<any>(null);
  const SliderNext = () => {
    sliderRef.current.slickNext();
  };
  const SliderPrev = () => {
    sliderRef.current.slickPrev();
  };

  const premieresCard: IPremieresCards[] = premieresCardData;

  const renderPremieresCard = premieresCard.map(
    (item: IPremieresCards, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div className="space-y-5 flex flex-col md:items-center 2xl:w-[20rem] xl:w-[18rem] lg:w-[13rem] sm:w-[11rem] w-2/5">
            <img src={item.preCardImg} alt="" className="w-full" />
            <div className="flex lg:space-x-3 space-x-1 text-white xl:w-full lg:w-11/12 w-full">
              <div>
                <img src={item.preCardIcon} alt="" />
              </div>
              <div className="xl:w-52 lg:w-[16rem] w-full xl:text-sm lg:text-xs text-[11px] font-bold md:block hidden">
                {item.preCardDesc}
              </div>
              <div className="sm:w-44 w-full text-sm font-bold md:hidden flex items-center">
                {item.preMobDesc}
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <>
      <div className="w-full relative md:block hidden 2xl:container mx-auto p-0">
        <div className="ml-6 slick-slider">
          <div className="absolute z-40 flex items-center h-full bg-gradient-to-r from-[#00001E] via-[#00001e77] to-[#00001e01] opacity-100 w-40 top-0 left-0">
            <img
              src="/img/leftArrow.png"
              alt=""
              className="xl:-mt-10 -mt-20 ml-8 xl:w-16 w-10 cursor-pointer"
              onClick={SliderPrev}
            />
          </div>
          <Slider ref={sliderRef} {...settings}>
            {renderPremieresCard}
          </Slider>
          <div className="absolute z-40 flex items-center h-full bg-gradient-to-r from-[#00001E] via-[#00001e77] to-[#00001e01] opacity-100 top-0 right-0 rotate-180 xl:w-40 w-36">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/img/leftArrow.png"
                alt=""
                className="xl:mt-12 mt-20 xl:w-16 w-10 absolute xl:left-10 xl:right-0 right-16 cursor-pointer"
                onClick={SliderNext}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-wrap sm:gap-10 gap-4 md:justify-start justify-center">
        {renderPremieresCard}
      </div>
    </>
  );
};

export default PremiereSlider;
