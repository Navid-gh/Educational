import { v4 as uuidv4 } from 'uuid';

export type SubLinks = {
  name: string;
  id: string;
  url: string;
};

export const tabs = [
  {
    name: 'صفحه اصلی',
    id: uuidv4(),
    url: '/',
  },
  {
    name: 'دوره های آموزشی',
    id: uuidv4(),
    url: '/Courses',
    isDropdown: true,
    links: [
      {
        name: 'بسته های ویژه',
        id: uuidv4(),
        url: '/Courses/Special',
      },
      {
        name: 'دوره های فن بیان و سخنوری',
        id: uuidv4(),
        url: '/Courses/Fanbayan',
      },
      {
        name: 'رشد و توسعه فردی',
        id: uuidv4(),
        url: '/Courses/PersonalDevelopment',
      },
    ],
  },
  {
    name: 'آموزش رایگان',
    id: uuidv4(),
    url: '/Courses',
    isDropdown: true,
    links: [
      {
        name: 'دوره رایگان',
        id: uuidv4(),
        url: 'Article/66982119b81fb6d998b0308d/%D9%85%DB%8C%D9%86%DB%8C-%D8%AF%D9%88%D8%B1%D9%87',
      },
      {
        name: 'دوره آیین چله شکرگزاری',
        id: uuidv4(),
        url: 'Article/6a2fd48497b964092a86e3af/%DA%86%D9%84%D9%87-%D8%B4%DA%A9%D8%B1%DA%AF%D8%B2%D8%A7%D8%B1%DB%8C',
      },
      {
        name: 'ابزار رایگان',
        id: uuidv4(),
        url: 'Article/6728a100829a4a13af541fd9/%D8%AC%D8%B9%D8%A8%D9%87%E2%80%8C%D8%A7%D8%A8%D8%B2%D8%A7%D8%B1-%D8%B7%D9%84%D8%A7%DB%8C%DB%8C',
      },
      {
        name: 'ویدیو سخنرانی و آموزشی',
        id: uuidv4(),
        url: 'Article/68babf3119b0414ff4387e73/%D8%B3%D8%AE%D9%86%D8%B1%D8%A7%D9%86%DB%8C-%D9%88-%D8%A2%D9%85%D9%88%D8%B2%D8%B4%DB%8C',
      },
    ],
  },
  {
    name: 'رضایت هنرجویان',
    id: uuidv4(),
    url: '/',
    isDropdown: true,
    links: [
      {
        name: 'رضایت بزرگسال',
        id: uuidv4(),
        url: 'Article/68babe7019b0414ff4387da9/%D8%B1%D8%B6%D8%A7%DB%8C%D8%AA-%D8%A8%D8%B2%D8%B1%DA%AF%D8%B3%D8%A7%D9%84',
      },
      {
        name: 'رضایت کودک',
        id: uuidv4(),
        url: 'Article/68babed619b0414ff4387e0e/%D8%B1%D8%B6%D8%A7%DB%8C%D8%AA-%DA%A9%D9%88%D8%AF%DA%A9',
      },
    ],
  },
  {
    name: 'خدمات های آموزشی',
    id: uuidv4(),
    url: '#',
    isDropdown: true,
    links: [
      {
        name: 'مجری‌گری صحنه',
        id: uuidv4(),
        url: '/Article/67fe88674d05739730ee22e1/%D9%85%D8%AC%D8%B1%DB%8C-%D8%B5%D8%AD%D9%86%D9%87-%D8%AF%D8%B1-%D8%B4%DB%8C%D8%B1%D8%A7%D8%B2',
      },
      {
        name: 'سخنرانی انگیزشی',
        id: uuidv4(),
        url: '#',
      },
      {
        name: 'مشاوره تخصصی رشد و بیان',
        id: uuidv4(),
        url: '/Help',
      },
    ],
  },
  {
    name: 'مقالات آموزشی',
    id: uuidv4(),
    url: '/Articles/Educational',
  },
  {
    name: 'کتاب آموزشی',
    id: uuidv4(),
    url: '/Books',
  },
  {
    name: 'درباره ما',
    id: uuidv4(),
    url: '/About-us',
  },
  {
    name: 'تماس با ما و مشاوره',
    id: uuidv4(),
    url: '/Contact-us',
  },
];
