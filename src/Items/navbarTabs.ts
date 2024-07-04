import { v4 as uuidv4 } from "uuid";

export const tabs = [
  {
    name: "صفحه اصلی",
    id: uuidv4(),
    url: "/",
  },
  {
    name: "مقالات آموزشی",
    id: uuidv4(),
    url: "/Articles",
  },
  {
    name: "دوره های آموزشی",
    id: uuidv4(),
    url: "/Courses",
    isDropdown: true,
  },
  {
    name: "کتاب آموزشی",
    id: uuidv4(),
    url: "/Books",
  },
  {
    name: "درباره ما",
    id: uuidv4(),
    url: "/About-us",
  },
  {
    name: "تماس با ما و مشاوره",
    id: uuidv4(),
    url: "/Contact-us",
  },
];
