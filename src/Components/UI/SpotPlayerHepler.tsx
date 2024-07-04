import { usePersianNums } from "../../hooks/usePersianNums";
import Whatsapp from "./Icons/Whatsapp";

const SpotPlayerHepler = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="self-center bg-pink max-w-fit px-2">
        راهنمای استفاده از اسپات پلیر
      </h1>
      <div className="flex flex-col gap-3">
        <h2>
          وارد لینک سایت اسپات پلیر شوید و ورژن مدنظر برنامه ی اسپات پلیر را از
          سایت دانلود کنید و برنامه را نصب کنید.
        </h2>
        <a
          href="https://spotplayer.ir/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue"
        >
          سایت اسپات پلیر
        </a>
        <h1>
          پس از نصب و ورود به حساب کاربری خود در برنامه ی اسپات پلیر لایسنس و کد
          گرفته شده از مارا برای دوره مد نظر خود وارد کنید و از دوره استفاده
          کنید.
        </h1>
        <div className="flex flex-col gap-1 mt-4">
          <span className="text-red-500">توجه : </span>
          <h1 className=" border-b border-black max-w-fit">
            در صورت بروز هرگونه مشکل و خطا در این فرایند با پشتیبانی ما تماس
            بگیرید یا با ادمین از طریق واتساپ در ارتباط باشید
          </h1>
        </div>
        <div className="flex gap-2">
          <span>شماره تماس : </span>
          <span>{usePersianNums("09330042028")}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span>ارتباط با ادمین : </span>
          <a
            href="https://api.whatsapp.com/send?phone=989307886969&text=%D8%B3%D9%84%D8%A7%D9%85%20%D8%B3%D9%84%D8%A7%D9%85%0A%D8%AE%D8%AF%D8%A7%20%D9%82%D9%88%D8%AA%20%D8%A8%D9%87%D8%AA%0A%DA%86%D8%B7%D9%88%D8%B1%DB%8C%20%D9%85%DB%8C%D8%AA%D9%88%D9%86%D9%85%20%DA%A9%D9%85%DA%A9%D8%AA%20%DA%A9%D9%86%D9%85%D8%9F"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-105"
          >
            <Whatsapp className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpotPlayerHepler;
