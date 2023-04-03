import { IMenuItems, ICardMenuItems } from "@/interfaces";
import * as Icons from "../components/global/Icons";

export const menuData: IMenuItems[] = [
  {
    id: 1,
    linkTitle: "Home",
    linkPath: "/",
  },
  {
    id: 2,
    linkTitle: "Premieres",
    linkPath: "/premieres",
  },
  {
    id: 3,
    linkTitle: "Categorias",
    linkPath: "/categories",
  },
  {
    id: 4,
    linkTitle: "Podcast",
    linkPath: "/podcast",
  },
  {
    id: 5,
    linkTitle: "Contact Us",
    linkPath: "/contact-us",
  },
];

export const cardData: ICardMenuItems[] = [
  {
    id: 1,
    cardImg: "/img/card1.png",
    cardTitle: "Lorem ipsum dolor sit",
    cardDesc: "amet, consectetur adipisicing elit. Nesciunt, quasi!",
  },
  {
    id: 2,
    cardImg: "/img/card2.png",
    cardTitle: "Lorem ipsum dolor sit",
    cardDesc: "amet, consectetur adipisicing elit. Nesciunt, quasi!",
  },
  {
    id: 3,
    cardImg: "/img/card3.png",
    cardTitle: "Lorem ipsum dolor sit",
    cardDesc: "amet, consectetur adipisicing elit. Nesciunt, quasi!",
  },
];
