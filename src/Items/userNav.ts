import { v4 as uuidv4 } from "uuid";

export const userNavItems = [
  {
    name: "پیشخوان",
    link: "",
    id: uuidv4(),
  },
  {
    name: "مشخصات",
    link: "Information",
    id: uuidv4(),
  },
  {
    name: "سفارش ها",
    arr: [
      {
        _name: "دوره های آنلاین",
        _link: "Orders/Online-courses",
        _id: uuidv4(),
      },
      {
        _name: "دوره های آفلاین",
        _link: "Orders/Offline-courses",
        _id: uuidv4(),
      },
      {
        _name: "دوره های حضوری",
        _link: "Orders/inPerson-courses",
        _id: uuidv4(),
      },
      {
        _name: "کتاب ها",
        _link: "Orders/Books",
        _id: uuidv4(),
      },
    ],
    id: uuidv4(),
  },
  {
    name: "خروج",
    link: "Logout",
    id: uuidv4(),
  },
];
