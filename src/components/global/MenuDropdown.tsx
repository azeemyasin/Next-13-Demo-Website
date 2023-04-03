import Link from "next/link";
import React from "react";
import { cardData, menuData } from "@/mock/BurgerMenuData";
import { IMenuItems, ICardMenuItems } from "../../interfaces";
import * as Icons from "./Icons";

type Props = {
  showDropdown?: boolean;
  onClick: () => void;
};

const MenuDropdown: React.FC<Props> = ({ showDropdown, onClick }) => {
  const menuItems: IMenuItems[] = menuData;

  const renderMenuItems = menuItems.map((item: IMenuItems, index: number) => {
    return (
      <React.Fragment key={`${item.id}${index}`}>
        <Link href={item.linkPath} passHref>
          <div className="hover:bg-[#181818] mb-3 text-gray-500 hover:text-white font-bold md:w-64 h-7 flex items-center space-x-3 pl-5">
            <div className="h-[6px] w-[6px] bg-gray-500 rounded-full"></div>
            <p className="cursor-pointer text-sm">{item.linkTitle}</p>
          </div>
        </Link>
      </React.Fragment>
    );
  });

  const cardItems: ICardMenuItems[] = cardData;

  const renderCardItems = cardItems.map(
    (item: ICardMenuItems, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div className="flex space-x-2">
            <div className="h-16 w-16 space-y-4">
              <img src={item.cardImg} alt="" />
            </div>
            <div className="w-40 text-sm">
              <div>{item.cardTitle}</div>{" "}
              <div className="truncate w-24">{item.cardDesc}</div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      {showDropdown === true && (
        <div className="z-[9999999999!important] right-0 md:mt-14 -mt-6 md:mr-10 md:rounded-xl fixed flex md:flex-row flex-col md:h-[390px] h-screen md:w-[530px] w-full bg-myBrown shadow-2xl shadow-black">
          <p className="text-2xl font-semibold text-white font-mono text-center pt-6 md:hidden">
            Audio Centro
          </p>
          <div className="flex justify-end mr-8 mt-2 md:hidden">
            <div onClick={onClick}>
              <Icons.CrossIcon />
            </div>
          </div>
          <div className="w-full">
            <div className="text-white space-y-3 space-x-10">
              <div className="mt-3">{renderMenuItems}</div>
            </div>
            <p className="ml-10 mt-5 font-bold text-white">Follow us</p>
            <div className="mb-8 flex ml-16 mt-6 space-x-5">
              <Link href="#" passHref>
                <div className="h-7 w-7 bg-blue-600 rounded-full flex justify-center items-center cursor-pointer p-2">
                  <Icons.FacebookIcon />
                </div>
              </Link>
              <Link href="#" passHref>
                <div className="h-7 w-7 bg-blue-400 rounded-full flex justify-center items-center cursor-pointer p-2 text-white fill-current">
                  <Icons.TwitterIcon />
                </div>
              </Link>
              <Link href="#" passHref>
                <div className="h-7 w-7 bg-orange-500 rounded-full flex justify-center items-center cursor-pointer p-2">
                  <Icons.InstagramIcon />
                </div>
              </Link>
              <Link href="#" passHref>
                <div className="h-7 w-7 bg-red-600 rounded-full flex justify-center items-center cursor-pointer p-2">
                  <Icons.YoutubeIcon />
                </div>
              </Link>
            </div>
          </div>
          <div className="h-[22rem] w-[1px] mt-5 bg-gray-900"></div>
          <div className="ml-10 text-white mt-3 md:block hidden">
            {renderCardItems}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuDropdown;
