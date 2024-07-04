import { memo, useCallback, useState } from "react";
import MainButton from "./MainButton";
import BuyComp from "./BuyComp";
import { Link } from "react-router-dom";
import { cn } from "../../utils/lib/Cn";
import OwnerProfile from "./OwnerProfile";
import { Book, Course, Article } from "../../Types/apiTypes";
import { usePersianNums } from "../../hooks/usePersianNums";
import IconWrapper from "./IconWrapper";
import BookIcon from "./Icons/Book";
import Pdf from "./Icons/Pdf";
import useCurrentTab from "../../hooks/useCurrentTab";
import { BASE_URL } from "../../api/axios";
import useAddToBasket from "../../hooks/useAddToBasket";
import useAuth from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { typeConvertor } from "../../utils/TypeConvertor";

type Props =
  | {
      type: "course";
      details: Course;
      theme: "black" | "white";
    }
  | {
      type: "book";
      details: Book;
      theme: "black" | "white";
    }
  | {
      type: "article";
      details: Article;
      theme: "black" | "white";
    }
  | {
      type: "event";
      details: Book | Course;
      theme: "black" | "white";
    };

const Card = ({ details, type, theme }: Props) => {
  const isBlack = theme === "black";
  if (type === "course") {
    const url = `/Course/${details._id}/${encodeURIComponent(
      details?.urlGoogle ?? details?.title
    ).replace(/%20/g, "-")}`;
    const { Auth } = useAuth();
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state) => state.basket);
    const buyHandler = useCallback(() => {
      useAddToBasket(Auth, dispatch, details, "course");
    }, [details]);
    return (
      <div
        className={cn(
          "p-4 mx-4 h-[400px] rounded-[2rem] bg-pink flex flex-col gap-3 shadow-card min-h-[34.375rem]",
          {
            "bg-black": isBlack,
          }
        )}
      >
        <div className="flex-[70%] min-h-[70%] relative image-fade">
          {Number(details.discount) > 0 ? (
            <div className="absolute -left-3 -top-2 discount-bg p-2 flex justify-center items-center">
              <span className="text-white px-1">
                %{usePersianNums(details.discount)}
              </span>
            </div>
          ) : null}
          <div className="absolute -right-1 -top-0 flex justify-center items-cente course-label-bg p-7">
            <span className="text-white -rotate-90 font-bold">
              {typeConvertor(details.type)}
            </span>
          </div>
          <img
            className="w-full h-full rounded-3xl"
            src={`${BASE_URL}${details.images[1]}`}
            alt="header-image"
          />
          <OwnerProfile
            name="صابر زارعی"
            profile="/images/saber.jpg"
            className="absolute bottom-6 z-10 right-4 text-white gap-2"
          />
        </div>
        <div className="flex-[30%] min-h-[30%] py-2 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <span
              className={cn("text-black text-right ", {
                "text-white": isBlack,
              })}
            >
              {details.title}
            </span>
            {Number(details.discount) > 0 ? (
              <span
                className={cn(
                  "text-black text-right line-through opacity-80 text-sm",
                  {
                    "text-white": isBlack,
                  }
                )}
              >
                {usePersianNums(details.price, true)} تومان
              </span>
            ) : null}
            <span
              className={cn("text-black text-right", { "text-white": isBlack })}
            >
              {usePersianNums(details.finalPrice, true)} تومان
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Link
              to={url}
              className="w-[80%] [@media(max-width:630px)]:w-[70%]"
            >
              <MainButton
                intent={isBlack ? "white" : "black"}
                size="card"
                text="بیشتر بدانید"
              />
            </Link>
            {products.find((item) => item._id === details._id) ? null : (
              <BuyComp
                intent={isBlack ? "white" : "black"}
                size="small"
                onClick={buyHandler}
              />
            )}
          </div>
        </div>
      </div>
    );
  } else if (type === "book") {
    const [price, setPrice] = useState<number | string>(details.pricePhysical);
    const [finalPrice, setFinalPrice] = useState<number | string>(
      details.finalPricePhysical
    );
    const { activeTab, handleClick } = useCurrentTab(0);

    const clickHandler = (
      finalPrice: number | string,
      price: number | string,
      idx: number
    ) => {
      setPrice(price);
      setFinalPrice(finalPrice);
      handleClick(idx, activeTab);
    };
    const url = `/Book/${details._id}/${encodeURIComponent(
      details?.urlGoogle ?? details?.title
    ).replace(/%20/g, "-")}`;
    return (
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2 items-center">
          <Link to={url}>
            <figure className="w-28 h-40 transition-all duration-300 hover:scale-110 relative">
              {Number(details.discount) > 0 ? (
                <div className="absolute -left-3 -top-2 discount-bg p-2 flex justify-center items-center">
                  <span className="text-white px-1">
                    %{usePersianNums(details.discount)}
                  </span>
                </div>
              ) : null}
              <img
                className="w-full h-full rounded-2xl"
                src={`${BASE_URL}${details.images[0]}`}
                alt="book-img"
              />
            </figure>
          </Link>
          <span className="font-bold text-sm">{details.title}</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-2 items-center">
            <IconWrapper
              className={cn("p-2 bg-purple", { "bg-white": activeTab === 0 })}
              title="نسخه فیزیکی"
              onClick={() =>
                clickHandler(
                  details.finalPricePhysical,
                  details.pricePhysical,
                  0
                )
              }
            >
              <BookIcon
                className={cn("w-4 h-4 fill-white", {
                  "fill-purple": activeTab === 0,
                })}
              />
            </IconWrapper>
            <IconWrapper
              className={cn("p-2 bg-purple", { "bg-white": activeTab === 1 })}
              title="نسخه دیجیتالی"
              onClick={() =>
                clickHandler(details.finalPriceVirtual, details.priceVirtual, 1)
              }
            >
              <Pdf
                id="book-pdf"
                className={cn("w-4 h-4 fill-white", {
                  "fill-purple": activeTab === 1,
                })}
              />
            </IconWrapper>
          </div>
          {Number(details.discount) > 0 ? (
            <span className="line-through opacity-50 text-xs">
              {usePersianNums(price, true)} تومان
            </span>
          ) : null}
          <span className="font-bold text-purple">
            {usePersianNums(finalPrice, true)} تومان
          </span>
        </div>
        <Link to={url}>
          <MainButton
            className="self-center w-full max-w-fit shadow-none"
            text={`مشاهده بیشتر`}
            intent="purple"
            size="medium"
          />
        </Link>
      </div>
    );
  } else if (type === "article") {
    const url = `/Article/${details._id}/${encodeURIComponent(
      details?.urlGoogle ?? details?.title
    ).replace(/%20/g, "-")}`;
    return (
      <div className="flex gap-4 h-full bg-lowPink p-4 rounded-2xl shadow-main subHero:flex-col">
        <figure className="w-[21rem] h-48 subHero:self-center subHero:w-[70%]">
          <img
            src={`${BASE_URL}${details.images[0]}`}
            alt="article-img"
            className="w-full h-full rounded-2xl"
          />
        </figure>
        <div className="flex flex-col gap-3 w-full justify-between">
          <OwnerProfile name="صابر زارعی" profile="/images/saber.jpg" />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">{details.title}</h1>
            <p className="text-sm opacity-80">{details.short_text}</p>
          </div>
          <Link to={url} className="self-end">
            <MainButton
              className=" bg-black hover:bg-purple hover:scale-100"
              text={`بیشتر بخوانید`}
              intent="purple"
              size="medium"
            />
          </Link>
        </div>
      </div>
    );
  } else {
    const { Auth } = useAuth();
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state) => state.basket);
    const buyHandler = useCallback(
      (item: "course" | "book") => {
        useAddToBasket(Auth, dispatch, details, item);
      },
      [details]
    );
    if ("yearOfPublication" in details) {
      const url = `/Book/${details._id}/${encodeURIComponent(
        details.title
      ).replace(/ /g, "-")}}`;
      return (
        <div className="flex gap-4 h-[10.5rem] bg-lowPink p-4 rounded-2xl shadow-main text-black tips2:text-xs">
          <figure className="w-48 h-full relative tips2:w-20 tips2:h-20">
            {Number(details.discount) > 0 ? (
              <div className="absolute -right-3 -top-2 discount-bg p-2 flex justify-center items-center">
                <span className="text-white px-1">
                  %{usePersianNums(details.discount)}
                </span>
              </div>
            ) : null}
            <img
              src={`${BASE_URL}${details.images[0]}`}
              alt="course-img"
              className="w-full h-full rounded-2xl"
            />
          </figure>
          <div className="flex flex-col gap-3 w-full justify-between text-sm tips2:text-xs">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold">{details.title}</h1>
              <div className="flex justify-between items-center">
                <span>قیمت :</span>
                <span className="line-through">
                  {usePersianNums(details.pricePhysical, true)} تومان
                </span>
                <span>
                  {usePersianNums(details.finalPricePhysical, true)} تومان
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center self-end">
              <Link to={url}>
                <MainButton
                  className=" bg-black hover:bg-purple hover:scale-100"
                  text={`بیشتر بدانید`}
                  intent="purple"
                  size="medium"
                />
              </Link>
              {products.find((item) => item._id === details._id) ? null : (
                <BuyComp
                  intent={"black"}
                  size="small"
                  onClick={() => buyHandler("book")}
                />
              )}
            </div>
          </div>
        </div>
      );
    } else {
      const url = `/Course/${details._id}/${encodeURIComponent(
        details?.urlGoogle ?? details?.title
      ).replace(/%20/g, "-")}`;
      return (
        <div className="flex gap-4 h-[10.5rem] bg-lowPink p-4 rounded-2xl shadow-main text-black tips2:text-xs">
          <figure className="w-48 h-full relative tips2:w-20 tips2:h-20">
            {Number(details.discount) > 0 ? (
              <div className="absolute -right-3 -top-2 discount-bg p-2 flex justify-center items-center">
                <span className="text-white px-1">
                  %{usePersianNums(details.discount)}
                </span>
              </div>
            ) : null}
            <img
              src={`${BASE_URL}${details.images[0]}`}
              alt="course-img"
              className="w-full h-full rounded-2xl"
            />
          </figure>
          <div className="flex flex-col gap-3 w-full justify-between text-sm tips2:text-xs">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold">{details.title}</h1>
              <div className="flex justify-between items-center">
                <span>قیمت :</span>
                <span className="line-through">
                  {usePersianNums(details.price, true)} تومان
                </span>
                <span>{usePersianNums(details.finalPrice, true)} تومان</span>
              </div>
            </div>
            <div className="flex gap-2 items-center self-end">
              <Link to={url}>
                <MainButton
                  className=" bg-black hover:bg-purple hover:scale-100"
                  text={`بیشتر بدانید`}
                  intent="purple"
                  size="medium"
                />
              </Link>
              {products.find((item) => item._id === details._id) ? null : (
                <BuyComp
                  intent={"black"}
                  size="small"
                  onClick={() => buyHandler("course")}
                />
              )}
            </div>
          </div>
        </div>
      );
    }
  }
};

export default memo(Card);
