export interface IMenuItems {
  id: number;
  linkTitle: string;
  linkPath: string;
}

export interface ICardMenuItems {
  id: number;
  cardImg: string;
  cardTitle: string;
  cardDesc: string;
}

export interface IPremieresCards {
  id: number;
  preCardImg: string;
  preCardIcon: string;
  preCardDesc: string;
  preMobDesc: string;
}

export interface ICategoriesCards {
  id: number;
  cardImg: string;
  cardTitle: string;
  cardDesc: string;
}

export interface INewsCards {
  id: number;
  cardImg: string;
  cardPath: string;
}

export interface INewsCardItems {
  id: number;
  cardImg: string;
  cardText: string;
  cardDesc: string;
}

export interface INewsSliderMob {
  id: number;
  cardImg: string;
  cardDesc: string;
  cardText: string;
}

export interface IPodcastVision {
  id: number;
  playImg: string;
  cardText: string;
  cardArrow: string;
}

export interface IPodcastRecomended {
  id: number;
  cardImg: string;
  cardTitle: string;
  cardDesc: string;
}

export interface IPodcastMostViewed {
  id: number;
  cardImg: string;
  cardText: string;
}
