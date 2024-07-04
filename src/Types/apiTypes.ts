import { ContactTimes } from "./ContactTimeType";

type IdSchema = {
  _id: string;
};

type SingleSchema = {
  __v: number | string;
} & IdSchema;

export type Episode = IdSchema & {
  text: string;
  title: string;
  _id: string;
};

export type Chapter = IdSchema & {
  numberOfSessions: number | string;
  text: string;
  title: string;
  time: {
    hour: number | string;
    min: number | string;
  };
  episodes: Episode[];
};

export type FAQ = IdSchema & {
  answer: string;
  question: string;
};

export type Comment = IdSchema & {
  comment: string;
  createdAt: string;
  updatedAt: string;
  show: boolean;
  isShowAdmin: boolean;
  user: {
    first_name: string;
    last_name: string;
  };
  answer: Omit<Comment, "answer">[];
};

export type Course = {
  category: string;
  chapters: Chapter[];
  comments: Comment[];
  discount: number | string;
  finalPrice: number | string;
  frequentlyAskedQuestions: FAQ[];
  images: string[];
  price: number | string;
  short_text: string;
  text: string;
  title: string;
  type: "online" | "offline" | "inPerson";
  level: string;
  spotPlayerID: string;
  item_type: "course";
  numberLink: number;
  reateds: Course[];
  urlTitle: string;
  urlGoogle: string;
  sortByNumber: number;
} & SingleSchema;

export type Book = {
  category: string;
  comments: Comment[];
  discount: number | string;
  images: string[];
  short_text: string;
  text: string;
  title: string;
  type: string;
  yearOfPublication: string;
  numberOfPages: string;
  pricePhysical: number | string;
  priceVirtual: number | string;
  finalPricePhysical: number | string;
  finalPriceVirtual: number | string;
  link: string;
  item_type: "book";
  numberLink: number;
  reateds: Book[];
  urlTitle: string;
  urlGoogle: string;
} & SingleSchema;

export type Article = {
  category: string;
  comments: Comment[];
  images: string[];
  short_text: string;
  text: string;
  title: string;
  tags: string[];
  status: boolean;
  item_type: "blog";
  numberLink: number;
  reateds: Article[];
  sortByNumber: number;
  urlTitle: string;
  urlGoogle: string;
} & SingleSchema;

export type View = SingleSchema & {
  createdAt: string;
  description: string;
  nameCourse: string;
  nameUser: string;
};

export type User = {
  lengthBook: number;
  lengthCourseInPerson: number;
  lengthCourseOfline: number;
  lengthCourseOnline: number;
  lengthcomment: number;
  first_name: string;
  last_name: string;
  phone: string;
  fixPhone: string;
  email: string;
  address: string;
  codePostal: string;
} & SingleSchema;

export type DiscountCode = {
  code: string;
  id: string;
  percent: number;
} & SingleSchema;

export type ContactsMsg = {
  name: string;
  phone: string;
  status: boolean;
  subject: string;
  text: string;
  time: ContactTimes;
} & SingleSchema;

export type DiscountEvent = {
  id: string;
  text: string;
  title: string;
  images: string[];
  products: (Course | Book)[];
} & SingleSchema;

export type Slide = IdSchema & {
  images: string[];
};
