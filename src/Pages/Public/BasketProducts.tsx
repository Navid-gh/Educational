import { useMemo, useRef, useState } from "react";
import Delete from "../../Components/UI/Icons/Delete";
import { usePersianNums } from "../../hooks/usePersianNums";
import CourseDetails from "../../Components/CourseDetails";
import { v4 as uuidv4 } from "uuid";
import MainButton from "../../Components/UI/MainButton";
import DiscountInput from "../../Components/UI/DiscountInput";
import DetailsUl from "../../Components/UI/DetailsUl";
import { typeConvertor } from "../../utils/TypeConvertor";
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxHooks";
import { BASE_URL } from "../../api/axios";
import { Link } from "react-router-dom";
import { removeProduct } from "../../redux/basket/basketSlice";
import toast from "react-hot-toast";
import { checkCode } from "../../api/basket/discountAPI";

const BasketProducts = () => {
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const { products } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const totalPriceRef = useRef<number>(0);
  const hasBookeRef = useRef<boolean>(false);
  const discountRef = useRef<HTMLInputElement>(null);
  const details = useMemo(() => {
    let totlaPrice = 0;
    let types: string[] = [];
    products.forEach((item) => {
      if ("finalPricePhysical" in item) {
        totlaPrice += Number(item.finalPricePhysical);
        types.push("نسخه چاپی");
        hasBookeRef.current = true;
      } else {
        totlaPrice += Number(item.finalPrice);
        types.push(typeConvertor(item.type));
      }
    });
    totalPriceRef.current = totlaPrice;
    return [
      {
        key: "تعداد محصولات",
        value: usePersianNums(products.length),
        id: uuidv4(),
      },
      {
        key: "نوع",
        value: types.join(","),
        id: uuidv4(),
      },
      {
        key: "مبلغ بدون تخفیف",
        value: usePersianNums(totlaPrice, true),
        id: uuidv4(),
      },
      {
        key: "سود شما",
        value: usePersianNums(discountedPrice, true),
        id: uuidv4(),
      },
      {
        key: "مبلغ کل با اعمال نخفیف",
        value: usePersianNums(finalPrice === 0 ? totlaPrice : finalPrice, true),
        id: uuidv4(),
      },
    ];
  }, [products, finalPrice, discountedPrice]);

  const handleRemove = (id: string, price: number | string) => {
    dispatch(removeProduct({ id, price }));
    toast.success("محصول با موفقیت حذف گردید");
  };

  const discountHandler = async () => {
    const loader = toast.loading("در حال بررسی کد وارد شده");
    try {
      const code = discountRef.current!.value;
      if (code.length !== 6) {
        toast.error(usePersianNums("کد باید 6 رقم باشد"));
        return;
      }
      const res = await checkCode(code);
      if (res) {
        const discounted = (Number(totalPriceRef.current) * res.percent) / 100;
        setDiscountedPrice(discounted);
        let val = Number(totalPriceRef.current) - discounted;
        if (val > 10000) {
          setFinalPrice(val);
        } else {
          setFinalPrice(10000);
        }
        toast.success("کد با موفقیت اعمال شد");
      } else {
        toast.error("کد معتبر نمیباشد");
      }
    } catch (error) {
      console.log(error);
      toast.error("خطا در برقراری ارتباط");
    } finally {
      toast.dismiss(loader);
    }
  };
  return (
    <section className="flex gap-3 navbar:flex-col navbar:gap-6">
      <div className="flex flex-col gap-3 flex-[70%] text-sm">
        <div className="flex gap-4 border-b-2 border-pink pb-2">
          <span className="w-4 h-4"></span>
          <span className="flex-[45%] max-w-[45%]">محصول</span>
          <span className="flex-[22%] max-w-[22%]">نوع</span>
          <span className="flex-[22%] max-w-[22%]">قیمت</span>
        </div>
        {products.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {products.map((data) => {
              let img,
                title,
                type: "physical" | "online" | "offline" | "inPerson",
                price: string | number;
              img = BASE_URL + data.images[0];
              title = data.title;
              if (data.item_type === "book") {
                type = "physical";
              } else {
                type = data.type;
              }
              if ("finalPricePhysical" in data) {
                price = data.finalPricePhysical;
              } else {
                price = data.finalPrice;
              }
              return (
                <li key={data._id} className="flex gap-4 items-center">
                  <Delete
                    id="basket-delete"
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => {
                      handleRemove(data._id, price);
                    }}
                  />
                  <div className="flex-[45%] max-w-[45%] flex gap-2 items-center">
                    <Link
                      to={
                        data.item_type === "book"
                          ? `/Book/${data._id}`
                          : `/Course/${data._id}`
                      }
                    >
                      <figure className="w-14 h-14 rounded-xl">
                        <img
                          src={img}
                          alt="basket-item-img"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </figure>
                    </Link>
                    <span>{title}</span>
                  </div>
                  <span className="flex-[22%] max-w-[22%]">
                    {typeConvertor(type)}
                  </span>
                  <span className="flex-[22%] max-w-[22%]">{`${usePersianNums(
                    price,
                    true
                  )} تومان`}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>محصولی در سبد شما وجود ندارد.</p>
        )}
      </div>
      <div className="flex-[30%] max-w-[17.5rem]">
        <CourseDetails header="جزییات سفارش شما" key="2">
          <DiscountInput ref={discountRef} onClick={discountHandler} />
          <DetailsUl details={details} />
          <Link
            to={"Information"}
            state={[
              products,
              details[1].value,
              finalPrice === 0 ? totalPriceRef.current : finalPrice,
              hasBookeRef.current,
              discountRef.current?.value,
            ]}
          >
            {products.length > 0 ? (
              <MainButton
                className="self-center w-full max-w-none"
                text={`ثبت سفارش`}
                intent="purple"
                size="medium"
              />
            ) : null}
          </Link>
        </CourseDetails>
      </div>
    </section>
  );
};

export default BasketProducts;
