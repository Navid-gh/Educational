import Logo from "./UI/Icons/Logo";
import FooterHeader from "./UI/FooterHeader";
import { fastAccesItems, linkItems } from "../Items/footerItems";
import { Link, useLocation } from "react-router-dom";
import { usePersianNums } from "../hooks/usePersianNums";
import { cn } from "../utils/lib/Cn";
import ZarinPal from "./UI/images/ZarinPal";
import SocialMediaWrapper from "./UI/SocialMediaWrapper";

const divClassNme = `flex flex-col gap-2 flex-1 text-sm tips:flex-[45%] hero:flex-[100%]`;
const ulClassNme = `list-none flex flex-col gap-4`;
const liClassNme = `transition-all duration-300 hover:scale-105 max-w-fit`;

const Footer = () => {
  const { pathname } = useLocation();
  let hidden = false;
  if (pathname.includes("Login")) {
    hidden = true;
  }
  return (
    <footer
      className={cn(
        "bg-black flex flex-col text-white border border-white border-solid mt-4",
        { hidden }
      )}
    >
      <div className="py-8 px-7 flex gap-12 border-b border-white border-solid flex-wrap">
        <div className="flex flex-col gap-4 flex-1 tips:flex-[45%] hero:flex-[100%]">
          <div className="flex justify-between items-center gap-2">
            <Logo
              id="logo-svg"
              className="w-8 h-8 rounded-lg overflow-hidden"
            />
            <span>آکادمی فن بیان صابر زارعی</span>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-sm">
              آکادمی فن بیان صابر زارعی مهارت‌های زندگی خود را با ما ارتقا دهید
              با آموزش‌های کاربردی و مفید صابر زارعی، مهارت‌های زندگی خود را در
              هر موقعیتی بهبود بخشید و زندگی موفق‌تری داشته باشید. دوره‌های
              آموزشی آکادمی فن بیان صابر زارعی به صورت حضوری، آنلاین و آفلاین
              برگزار می‌شوند. برای کسب اطلاعات بیشتر و ثبت نام، همین حالا با ما
              تماس بگیرید.
            </p>
            <div className="flex justify-between text-sm gap-2">
              <span className="whitespace-nowrap">شماره تماس :</span>
              <span>{usePersianNums("09330042028")}</span>
            </div>
          </div>
        </div>
        <div className={divClassNme}>
          <FooterHeader>دسترسی سریع</FooterHeader>
          <ul className={ulClassNme}>
            {fastAccesItems.map(({ link, name, key }) => (
              <Link className={liClassNme} key={key} to={link}>
                {name}
              </Link>
            ))}
          </ul>
        </div>
        <div className={divClassNme}>
          <FooterHeader>راه های ارتباطی</FooterHeader>
          <ul className={ulClassNme}>
            {linkItems.map(({ link, name, key }) => (
              <Link className={liClassNme} key={key} to={link}>
                {name}
              </Link>
            ))}
          </ul>
        </div>
        <div className={divClassNme}>
          <FooterHeader>مجوز ها</FooterHeader>
          <ul className={ulClassNme}>
            <li
              className="p-2 bg-white max-w-fit w-40 h-13 cursor-pointer"
              key={1}
            >
              <a href="https://www.zarinpal.com/">
                <ZarinPal />
              </a>
            </li>
            <li
              className="p-2 bg-white max-w-fit w-40 h-13 cursor-pointer"
              key={2}
            >
              <a
                referrerPolicy="origin"
                target="_blank"
                href="https://trustseal.enamad.ir/?id=361638&Code=KmuuRO5BU8JeKcoVTihf"
              >
                <img
                  referrerPolicy="origin"
                  src="https://trustseal.enamad.ir/logo.aspx?id=361638&Code=KmuuRO5BU8JeKcoVTihf"
                  alt=""
                  style={{ cursor: "pointer" }}
                  id="KmuuRO5BU8JeKcoVTihf"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-sm py-6 px-12 flex justify-between tips2:text-[.65rem] border-white border-b border-solid hero:flex-col gap-3">
        <span>با ما در فضای مجازی همراه باشید</span>
        <SocialMediaWrapper />
      </div>
      <div className="text-sm py-6 px-12 flex justify-between tips2:text-[.65rem] subHero:flex-col gap-3 items-center">
        <span>کلیه حقوق این سایت متعلق به صابر زارعی میباشد</span>
        <div className="flex gap-2">
          <span>تیم توسعه : </span>
          <a
            href="https://bracketteam.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink"
          >
            تیم براکت
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
