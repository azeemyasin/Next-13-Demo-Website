import React from "react";
import {
  IPodcastMostViewed,
  IPodcastRecomended,
  IPodcastVision,
} from "@/interfaces";
import {
  podcastMostViewed,
  podcastRecomended,
  podcastVision,
} from "@/mock/PodcastMockData";

const PodcastVision: React.FC = () => {
  const visionCards: IPodcastVision[] = podcastVision;
  const renderVisionCards = visionCards.map(
    (item: IPodcastVision, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div className="flex justify-between items-center gap-4 bg-lightBrown text-white rounded-xl lg:p-5 sm:p-3 p-2">
            <div className="space-x-5 flex items-center">
              <img src={item.playImg} alt="" className="w-10 h-10 object-cover" />
              <p className="lg:text-base text-sm">{item.cardText}</p>
            </div>
            <img src={item.cardArrow} alt="" className="w-6 h-6 -rotate-180" />
          </div>
        </React.Fragment>
      );
    }
  );

  const recomendedCard: IPodcastRecomended[] = podcastRecomended;
  const renderRecomendedCards = recomendedCard.map(
    (link: IPodcastRecomended, index: number) => {
      return (
        <React.Fragment key={`${link.id}${index}`}>
          <div className="flex gap-2 sm:p-0 p-3">
            <img
              src={link.cardImg}
              alt=""
              className="h-28 w-28 rounded-tl-xl rounded-bl-xl bg-red-300 object-cover"
            />
            <div className="bg-myBrown 2xl:w-[15.8rem] w-full p-3 rounded-tr-xl rounded-br-xl space-y-1">
              <h3 className="text-white lg:text-base text-sm">
                {link.cardTitle}
              </h3>
              <div className="h-2 w-2 bg-myBlue rounded-full"></div>
              <p className="text-gray-500 sm:text-base text-xs">
                {link.cardDesc}
              </p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );
  const mostViewed: IPodcastMostViewed[] = podcastMostViewed;
  const renderMostViewed = mostViewed.map(
    (items: IPodcastMostViewed, index: number) => {
      return (
        <React.Fragment key={`${items.id}${index}`}>
          <div className="flex gap-4">
            <img
              src={items.cardImg}
              alt=""
              className="lg:w-28 w-24 lg:h-28 h-24 rounded-md obj"
            />
            <p className="text-white w-60 font-semibold">{items.cardText}</p>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <>
      <div className="w-full h-full 2xl:container mx-auto 2xl:p-0 sm:p-5  p-0 flex lg:justify-start md:justify-between justify-center mt-20">
        <div className="md:w-1/2 sm:w-4/5 w-full h-full">
          <div className="w-full h-full bg-myBrown lg:p-10 sm:p-5 p-3 pt-10">
            <div className="flex md:hidden items-center sm:gap-6 gap-3 text-white pb-16">
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-blue-600 rounded-full"></div>
                <h1 className="sm:text-xl text-base">Vision</h1>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                <h1 className="sm:text-xl text-base">Episodes</h1>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                <h1 className="sm:text-xl text-[15px]">Recommended</h1>
              </div>
            </div>
            <h1 className="text-white text-3xl font-semibold pb-5">Vision</h1>
            <p className="text-gray-400 pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quam ipsam optio autem, sit odio dolorum saepe aspernatur ipsum
              expedita eligendi voluptatibus totam nulla corporis inventore
              asperiores quos vitae dicta cumque sapiente iusto itaque
              consequatur. Doloremque impedit accusantium, eum quae eaque beatae
              veniam dicta inventore. Ipsa error optio consequatur delectus
            </p>
            <div className="text-white flex items-center gap-3">
              <p>See more</p>
              <img
                src="/img/leftArrow.png"
                alt=""
                className="w-4 h-4 -rotate-90"
              />
            </div>
            <h1 className="text-white font-bold text-3xl pt-16 pb-2">
              Episodes
            </h1>
            <p className="text-gray-500 pb-16">87 episodes</p>
            <div className="space-y-5 pb-6">{renderVisionCards}</div>
            <div className="flex justify-end items-center gap-2 pb-10">
              <p className="text-white">See more</p>
              <img
                src="/img/leftArrow.png"
                alt=""
                className="w-4 h-4 -rotate-90"
              />
            </div>
          </div>
          <img
            src="/img/placeholderVision.png"
            alt=""
            className="w-full sm:mt-20 mt-10 sm:pb-20 pb-10 object-cover"
          />
          <h1 className="text-white font-bold text-3xl sm:pl-10 pl-3 2xl:pb-20 pb-10">
            Recomended
          </h1>
          <div className="flex flex-wrap 2xl:gap-5 sm:gap-3 pb-32 2xl:pl-0 sm:pl-10 pl-0">
            {renderRecomendedCards}
          </div>
        </div>
        <div className="lg:w-1/2 w-2/5 h-full flex-col items-center md:flex hidden">
          <div>
            <div className="pb-20">
              <img src="/img/placeholder2.png" alt="" />
            </div>
            <h1 className="text-white text-2xl font-semibold pb-10">
            The Most Viewed Ones
            </h1>
            <div className="space-y-5">{renderMostViewed}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastVision;
