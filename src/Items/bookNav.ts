import { v4 as uuidv4 } from "uuid";

export const bookNavItems = [
  {
    name: "اطلاعات کلی",
    link: "overview",
    id: uuidv4(),
  },
  {
    name: "نظرات هنرجویان",
    link: "comments",
    id: uuidv4(),
  },
  {
    name: "کتاب های پیشنهادی",
    link: "related-courses",
    id: uuidv4(),
  },
];
