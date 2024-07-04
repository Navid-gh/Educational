import { v4 as uuidv4 } from "uuid";

export const courseNavItems = [
  {
    name: "اطلاعات کلی",
    link: "overview",
    id: uuidv4(),
  },
  {
    name: "سوالات متداول",
    link: "freq-questions",
    id: uuidv4(),
  },
  {
    name: "سرفصل های دوره",
    link: "chapters",
    id: uuidv4(),
  },
  {
    name: "نظرات هنرجویان",
    link: "comments",
    id: uuidv4(),
  },
  {
    name: "دوره های پیشنهادی",
    link: "related-courses",
    id: uuidv4(),
  },
];
