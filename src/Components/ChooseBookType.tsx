import { memo } from "react";
import MainButton from "./UI/MainButton";
import { usePersianNums } from "../hooks/usePersianNums";
// import IconWrapper from "./UI/IconWrapper";
// import Book from "./UI/Icons/Book";
// import Pdf from "./UI/Icons/Pdf";
// import { cn } from "../utils/lib/Cn";
// import useCurrentTab from "../hooks/useCurrentTab";

export type BookProps = {
  digitPrice: number;
  physicPrice: number;
  image: string;
  pdf: string;
};

const ChooseBookType = ({
  digitPrice,
  physicPrice,
  image,
  pdf,
  buyHandler,
  isInBasket,
}: BookProps & {
  buyHandler: () => void;
  isInBasket: boolean;
}) => {
  // const [price, setPrice] = useState<number>(physicPrice);
  // const [type, setType] = useState<"physic" | "digit">("physic");
  // const { activeTab, handleClick } = useCurrentTab(0);

  // const clickHandler = (price: number, idx: number) => {
  //   setPrice(price);
  //   handleClick(idx, activeTab);
  // };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 items-center">
        <img src={image} alt="book" className="w-32 h-40 rounded-xl" />
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <span>نسخه چاپی : </span>
              <span>{usePersianNums(physicPrice, true)} تومان</span>
            </div>
            <div className="flex gap-4">
              <span>نسخه PDF : </span>
              <span>{usePersianNums(digitPrice, true)} تومان</span>
            </div>
          </div>
          {/* <span>نوع کتاب را مشخص کنید</span> */}
          {/* <div className="flex gap-4">
            <IconWrapper
              className={cn("p-2 bg-purple", { "bg-white": activeTab === 0 })}
              title="نسخه فیزیکی"
              onClick={() => {
                // clickHandler(physicPrice, 0);
                // setType("physic");
              }}
            >
              <Book
                className={cn("w-4 h-4 fill-white", {
                  "fill-purple": activeTab === 0,
                })}
              />
            </IconWrapper>
            <IconWrapper
              className={cn("p-2 bg-purple", { "bg-white": activeTab === 1 })}
              title="نسخه دیجیتالی"
              onClick={() => {
                // clickHandler(digitPrice, 1);
                // setType("digit");
              }}
            >
              <Pdf
                id="book-pdf"
                className={cn("w-4 h-4 fill-white", {
                  "fill-purple": activeTab === 1,
                })}
              />
            </IconWrapper>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {isInBasket ? (
          <p className="self-center">هم اکنون در سبد خرید شما</p>
        ) : (
          <MainButton
            text={`افزودن به سبد خرید`}
            intent="purple"
            size="medium"
            className="self-center w-full max-w-none"
            onClick={() => buyHandler()}
          />
        )}
        <a href={"/" + pdf}>
          <MainButton
            text="لینک خرید نسخه PDF"
            intent="purple"
            size="medium"
            className="self-center w-full max-w-none"
          />
        </a>
      </div>
      {/* {type === "digit" ? (
        <a href={"/" + pdf}>
          <MainButton
            text="لینک خرید"
            intent="purple"
            size="medium"
            className="self-center w-full max-w-none"
          />
        </a>
      ) : isInBasket ? (
        <p className="self-center">هم اکنون در سبد خرید شما</p>
      ) : (
        <MainButton
          text={`${usePersianNums(price, true)} تومان`}
          intent="purple"
          size="medium"
          className="self-center w-full max-w-none"
          onClick={() => buyHandler()}
        />
      )} */}
    </div>
  );
};

export default memo(ChooseBookType);
