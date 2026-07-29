import { ContactTimes } from './ContactTimeType';

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
  answer: Omit<Comment, 'answer'>[];
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
  type: 'online' | 'offline' | 'inPerson';
  level: string;
  spotPlayerID: string;
  item_type: 'course';
  numberLink: number;
  reateds: Course[];
  urlTitle: string;
  urlGoogle: string;
  sortByNumber: number;
  subCourse: string[];
  score: number;
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
  item_type: 'book';
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
  item_type: 'blog';
  numberLink: number;
  reateds: Article[];
  sortByNumber: number;
  urlTitle: string;
  urlGoogle: string;
  robots: 'index,follow' | 'noindex,follow';
  canonicalHref: string;
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

export type Faqs = {
  q: string;
  a: string;
};

export type VideoItem = {
  url: string;
};

export type LandingType = {
  title: string;
  subtitle: string;
  section1Title: string;
  section1Text1: string;
  section1Text2: string[];
  section1Text3: string;
  formTitle: string;
  formTitle2: string;
  packTitle: string;
  packText1: string;
  packText2: string[];
  courseTitle: string;
  courseText1: string;
  courseText2: string;
  courseText3: string;
  courseId: string;
  coursePrice: number | string;
  coursePriceWithDiscount: number | string;
  faqs: Faqs[];
  videos: VideoItem[];
  showTopForm: boolean;
  showBottomForm: boolean;
  showTelegramButton: boolean;
  showWatsupButton: boolean;
};

export type RobotsType = 'index,follow' | 'noindex,follow';

export type SitemapChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export type SitemapItemType = {
  _id: string;
  url: string;
  priority: number;
  changefreq: SitemapChangeFreq;
  createdAt?: string;
  updatedAt?: string;
};

export type RedirectItem = {
  _id: string;
  oldUrl: string;
  newUrl: string;
  statusCode: 301 | 302;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};
