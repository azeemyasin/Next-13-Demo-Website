import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { ICategoriesCards } from "@/interfaces";
import {
  noticiasData,
  deportesData,
  entretenimientoData,
  bienestarData,
} from "@/mock/CategoriesMockData";
import cn from "classnames";

const CategoriesCards: React.FC = () => {
  const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };
  let sliderRef = useRef<any>(null);
  const SliderNext = () => {
    sliderRef.current.slickNext();
  };
  const SliderPrev = () => {
    sliderRef.current.slickPrev();
  };

  const categoriesNoticias: ICategoriesCards[] = noticiasData;
  const categoriesDeportes: ICategoriesCards[] = deportesData;
  const categoriesEntretenimiento: ICategoriesCards[] = entretenimientoData;
  const categoriesBienestar: ICategoriesCards[] = bienestarData;

  const [tabs, setTabs] = useState<any[]>([
    {
      tabName: "News",
      tabSelected: true,
    },
    {
      tabName: "Sports",
      tabSelected: false,
    },
    {
      tabName: "Entertainment",
      tabSelected: false,
    },
    {
      tabName: "Welfare",
      tabSelected: false,
    },
  ]);

  const handleActiveTab = (index: number) => {
    let updatedTabs = [...tabs];
    updatedTabs.forEach((tab) => (tab.tabSelected = false));
    updatedTabs[index].tabSelected = true;
    setTabs(updatedTabs);
  };

  const renderTabs = tabs.map((item: any, index: number) => {
    return (
      <React.Fragment key={`${item.tabName}${index}`}>
        <div
          onClick={() => handleActiveTab(index)}
          className={cn(
            "h-[2.7rem] px-4 rounded-[2rem] font-semibold text-center pt-[10px] cursor-pointer md:mr-0 mr-4",
            {
              "bg-white text-primary": item.tabSelected,
              "bg-[#28282D] text-white": !item.tabSelected,
            }
          )}
        >
          {item.tabName}
        </div>
      </React.Fragment>
    );
  });

  const renderCategoriesNoticias = categoriesNoticias.map(
    (cards: ICategoriesCards, index: number) => {
      return (
        <React.Fragment key={`${cards.id}${index}`}>
          <div className="flex gap-3">
            <div className="lg:w-44 md:w-28 sm:w-1/2 w-3/5 lg:h-44 md:h-28 h-1/2">
              <img src={cards.cardImg} alt="" />
            </div>
            <div className="text-white flex flex-col 2xl:w-[21rem] xl:w-[17rem] lg:w-[16rem] md:w-[13rem] w-full lg:p-3 p-2 bg-myBrown rounded-tr-2xl rounded-br-2xl lg:space-y-2 space-y-1">
              <span className="lg:text-lg md:text-sm sm:text-lg text-sm sm:font-bold w-full">
                {cards.cardTitle}
              </span>
              <span className="sm:h-2 h-1 sm:w-2 w-1 rounded-full bg-myBlue"></span>
              <span className="lg:text-sm md:text-xs sm:text-base text-xs sm:font-bold font-semibold text-gray-400">
                {cards.cardDesc}
              </span>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );
  const renderCategoriesDeportes = categoriesDeportes.map(
    (cards: ICategoriesCards, index: number) => {
      return (
        <React.Fragment key={`${cards.id}${index}`}>
          <div className="flex gap-3">
            <div className="lg:w-44 md:w-28 sm:w-1/2 w-3/5 lg:h-44 md:h-28 h-1/2">
              <img src={cards.cardImg} alt="" />
            </div>
            <div className="text-white flex flex-col 2xl:w-[21rem] xl:w-[17rem] lg:w-[16rem] md:w-[13rem] w-full lg:p-3 p-2 bg-myBrown rounded-tr-2xl rounded-br-2xl lg:space-y-2 space-y-1">
              <span className="lg:text-lg sm:text-sm text-xs font-bold w-full">
                {cards.cardTitle}
              </span>
              <span className="sm:h-2 h-1 sm:w-2 w-1 rounded-full bg-myBlue"></span>
              <span className="lg:text-sm text-xs sm:font-bold font-semibold text-gray-400">
                {cards.cardDesc}
              </span>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );
  const renderCategoriesEntretenimiento = categoriesEntretenimiento.map(
    (cards: ICategoriesCards, index: number) => {
      return (
        <React.Fragment key={`${cards.id}${index}`}>
          <div className="flex gap-3">
            <div className="lg:w-44 md:w-28 sm:w-1/2 w-3/5 lg:h-44 md:h-28 h-1/2">
              <img src={cards.cardImg} alt="" />
            </div>
            <div className="text-white flex flex-col 2xl:w-[21rem] xl:w-[17rem] lg:w-[16rem] md:w-[13rem] w-full lg:p-3 p-2 bg-myBrown rounded-tr-2xl rounded-br-2xl lg:space-y-2 space-y-1">
              <span className="lg:text-lg sm:text-sm text-xs font-bold w-full">
                {cards.cardTitle}
              </span>
              <span className="sm:h-2 h-1 sm:w-2 w-1 rounded-full bg-myBlue"></span>
              <span className="lg:text-sm text-xs sm:font-bold font-semibold text-gray-400">
                {cards.cardDesc}
              </span>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );
  const renderCategoriesBienestar = categoriesBienestar.map(
    (cards: ICategoriesCards, index: number) => {
      return (
        <React.Fragment key={`${cards.id}${index}`}>
          <div className="flex gap-3">
            <div className="lg:w-44 md:w-28 sm:w-1/2 w-3/5 lg:h-44 md:h-28 h-1/2">
              <img src={cards.cardImg} alt="" />
            </div>
            <div className="text-white flex flex-col 2xl:w-[21rem] xl:w-[17rem] lg:w-[16rem] md:w-[13rem] w-full lg:p-3 p-2 bg-myBrown rounded-tr-2xl rounded-br-2xl lg:space-y-2 space-y-1">
              <span className="lg:text-lg sm:text-sm text-xs font-bold w-full">
                {cards.cardTitle}
              </span>
              <span className="sm:h-2 h-1 sm:w-2 w-1 rounded-full bg-myBlue"></span>
              <span className="lg:text-sm text-xs sm:font-bold font-semibold text-gray-400">
                {cards.cardDesc}
              </span>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="md:flex hidden lg:gap-10 gap-5 lg:pb-16 pb-10 justify-center lg:w-3/4 w-11/12">
          {renderTabs}
        </div>
      </div>
      <div className="w-full flex justify-center md:hidden gap-2">
        <div className="absolute h-12 w-4/5">
          <div className="w-2/5 h-12 bg-gradient-to-r from-transparent to-primary via-primary absolute -right-0 z-50"></div>
        </div>
        <div onClick={SliderPrev} className="h-7 w-7 mt-2">
          <img src="/img/leftArrow.png" alt="" />
        </div>
        <div className="pb-10 sm:w-[70%] w-4/5">
          <Slider ref={sliderRef} {...settings}>
            {renderTabs}
          </Slider>
        </div>
        <div
          onClick={SliderNext}
          className="h-7 w-7 mt-2 transform rotate-180 z-50"
        >
          <img src="/img/leftArrow.png" alt="" />
        </div>
      </div>
      <div className="flex flex-wrap 2xl:container mx-auto pb-10 xl:w-3/4">
        {tabs[0].tabSelected && (
          <div className="flex flex-wrap w-full 2xl:gap-4 lg:gap-10 gap-5 md:justify-start justify-center">
            {renderCategoriesNoticias}
          </div>
        )}
        {tabs[1].tabSelected && (
          <div className="flex flex-wrap w-full 2xl:gap-4 lg:gap-10 gap-5 md:justify-start justify-center">
            {renderCategoriesDeportes}
          </div>
        )}
        {tabs[2].tabSelected && (
          <div className="flex flex-wrap w-full 2xl:gap-4 lg:gap-10 gap-5 md:justify-start justify-center">
            {renderCategoriesEntretenimiento}
          </div>
        )}
        {tabs[3].tabSelected && (
          <div className="flex flex-wrap w-full 2xl:gap-4 lg:gap-10 gap-5 md:justify-start justify-center">
            {renderCategoriesBienestar}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoriesCards;
