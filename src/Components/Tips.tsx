import Tip from "./UI/Tip";
import HeadTitle from "./UI/HeadTitle";
import Pay from "./UI/images/Pay";
import Accessibility from "./UI/images/Accessibility";
import Online from "./UI/images/Online";
import Counseling from "./UI/images/Counseling";
import { v4 as uuidv4 } from "uuid";

type Props = {
  onClick: () => void;
};

const tips = [
  {
    img: <Online id="online-svg" />,
    title: "ارتباط خصوصی با ادمین",
    text: " با ما در ساعت کاری به کمک فضای مجازی در ارتباط باشید(کلیک کنید)",
    key: uuidv4(),
    link: `https://eitaa.com/Saberzarei_support`,
  },
  {
    img: <Counseling id="couns-svg" />,
    title: "مشاوره تخصصی رایگان",
    text: "با ما ارتباط بگیرید تا شمارا به بهترین مسیر ممکن راهنمایی کنیم(کلیک کنید)",
    key: uuidv4(),
  },
  {
    img: <Accessibility id="access-svg" />,
    title: "دسترسی آسان از سراسر دنیا",
    text: "از تمام نقاط ایران و دنیا به آموزش ها و مطالب ما به راحتی دسترسی داشته باشید",
    key: uuidv4(),
  },
  {
    img: <Pay id="pay-svg" />,
    title: "پرداخت سریع و مطمئن",
    text: "پرداخت از هر جای ایران به صورت آنلاین بدون نیاز به مراجعه حضوری",
    key: uuidv4(),
  },
];

const Tips = ({ onClick }: Props) => {
  return (
    <section className="flex flex-col gap-4 pt-3">
      <HeadTitle>چیز هایی که فراتر از آموزش نیاز داری</HeadTitle>
      <div className="flex justify-between tips:flex-wrap">
        {tips.map((tip, idx) => {
          if (idx === 1) return <Tip {...tip} onClick={onClick} />;
          return <Tip {...tip} />;
        })}
      </div>
    </section>
  );
};

export default Tips;
