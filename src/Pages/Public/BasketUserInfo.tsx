import { useMemo, useState, useRef, ChangeEvent } from "react";
import MainInput from "../../Components/UI/MainInput";
import CourseDetails from "../../Components/CourseDetails";
import { usePersianNums } from "../../hooks/usePersianNums";
import { v4 as uuidv4 } from "uuid";
import MainButton from "../../Components/UI/MainButton";
import DetailsUl from "../../Components/UI/DetailsUl";
import { CheckboxWithText } from "../../Components/UI/CheckBoxWithText";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { payment } from "../../api/basket/paymentAPI";
import useAuth from "../../hooks/useAuth";
import type { Course, Book } from "../../Types/apiTypes";
import { useAuthHooks } from "../../hooks/useAuthHooks";
import { useQuery } from "@tanstack/react-query";
import {
  City,
  State,
  getCities,
  getPostPrice,
  getStates,
} from "../../api/post/postexAPI";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import Loader from "../../Components/UI/Loader";
import useInputValidator from "../../hooks/useInputValidator";

const wrapperDiv = `flex justify-between gap-4 subHero:flex-col`;

const BasketUserInfo = () => {
  const [products, types, totlaPrice, hasBook, discountCode] =
    useLocation().state;
  const navigate = useNavigate();
  if (!products) navigate("/Basket");
  const [checkBoxes, setCheckBoxes] = useState({
    pay: false,
    policy: false,
  });
  const stateRef = useRef<HTMLSelectElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const fanameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLTextAreaElement>(null);
  const stateNameRef = useRef<string>("");
  const cityNameRef = useRef<string>("");
  const [cities, setCities] = useState<City[]>([]);
  const [isCityLoading, setIsCityLoading] = useState(false);
  const [isPendingForBasket, setIsPendingForBasket] = useState(false);
  const [postPrice, setPostPrice] = useState(0);
  const { token, data } = useAuth();
  const auth = useAuthHooks();
  const details = useMemo(() => {
    return [
      {
        key: "محصولات",
        value: usePersianNums(products.length),
        id: uuidv4(),
      },
      {
        key: "نوع محصولات",
        value: types,
        id: uuidv4(),
      },
      {
        key: "مبلغ کل با اعمال تخفیف",
        value: `${usePersianNums(
          Number(totlaPrice) + Number(postPrice),
          true
        )} تومان`,
        id: uuidv4(),
      },
    ];
  }, [postPrice]);

  let statesData: State[] | undefined;
  let isLoading: boolean = false;
  let isError: boolean = false;
  let error: Error | null = null;
  if (hasBook) {
    const statesQuery = useQuery({
      queryKey: ["states", "userInfo"],
      queryFn: getStates,
    });
    statesData = statesQuery.data;
    isLoading = statesQuery.isLoading;
    isError = statesQuery.isError;
    error = statesQuery.error;
  }

  const changeCheckedHandler = (key: "pay" | "policy") => {
    setCheckBoxes((prev) => {
      const curretnVal = prev[key];
      return { ...prev, [key]: !curretnVal };
    });
  };

  const getCity = async (stateId: number) => {
    setIsCityLoading(true);
    try {
      const res = await getCities(stateId);
      setCities(res);
    } catch (error) {
      console.log(error);
      toast.error("خطا در برقراری ارتباط");
    } finally {
      setIsCityLoading(false);
    }
  };

  const handlePay = async () => {
    if (!checkBoxes.pay || !checkBoxes.policy) {
      toast.error("لطفا باکس های مورد نظر را تایید کنید");
      return;
    }
    if (hasBook && postPrice === 0) {
      toast.error("لطفا شهر و استان خود را مشخص کنید");
      return;
    }
    const fnameMsg = useInputValidator(fanameRef.current?.value);
    if (fnameMsg) {
      toast.error(fnameMsg);
      return;
    }
    const lnameMsg = useInputValidator(lnameRef.current?.value);
    if (lnameMsg) {
      toast.error(lnameMsg);
      return;
    }
    const phoneMsg = useInputValidator(phoneRef.current?.value, "phone");
    if (phoneMsg) {
      toast.error(phoneMsg);
      return;
    }
    const addressMsg = useInputValidator(addressRef.current?.value);
    if (addressMsg) {
      toast.error(addressMsg);
      return;
    }
    const loader = toast.loading("در حال انتقال به درگاه");
    setIsPendingForBasket(true);
    try {
      const res = await payment(
        { token, ...auth },
        hasBook
          ? {
              sendPrice: postPrice,
              provice: stateNameRef.current,
              city: cityNameRef.current,
              address: addressRef.current!.value,
              code: discountCode ?? "",
              bascket: products.map((item: Course | Book) => {
                return {
                  id: item._id,
                  item_type: item.item_type,
                };
              }),
            }
          : {
              code: discountCode ?? "",
              bascket: products.map((item: Course | Book) => {
                return {
                  id: item._id,
                  item_type: item.item_type,
                };
              }),
            }
      );
      window.location.replace(res);
    } catch (error) {
      console.log(error);
      toast.error("خطا در برقراری ارتباط");
    } finally {
      toast.dismiss(loader);
      setIsPendingForBasket(false);
    }
  };

  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    stateNameRef.current = e.target.options[e.target.selectedIndex].text;
    getCity(Number(stateRef.current!.value));
  };
  const handleCityChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    cityNameRef.current = e.target.options[e.target.selectedIndex].text;
    const data = {
      serviceId: 723,
      weight: 50,
      insuranceName: "غرامت تا سقف 500 هزار تومان",
      CartonSizeName: "کارتن نیاز ندارم.",
      packingDimension: {
        length: 50,
        width: 50,
        height: 50,
      },
      senderCityId: 409,
      receiverCityId: Number(cityRef.current!.value),
      goodsValue: Number(totlaPrice),
      printBill: false,
      printLogo: false,
      needCartoon: true,
      isCod: false,
      sendSms: false,
    };
    const loader = toast.loading("درحال محاسبه ی هزینه ارسال");
    try {
      const res = await getPostPrice(data);
      let price = 40000;
      if (
        res?.ServicePrices &&
        res?.ServicePrices[0] &&
        res?.ServicePrices[0].Price
      ) {
        let tempPrice = String(res?.ServicePrices[0].Price);
        tempPrice = tempPrice.substring(0, tempPrice.length - 1);
        price = Number(tempPrice);
      }
      setPostPrice(price);
      // console.log(price);
    } catch (error) {
      console.log(error);
      toast.loading("خطا در برقراری ارتباط");
    } finally {
      toast.dismiss(loader);
    }
  };
  return (
    <section className="flex gap-6 navbar:flex-col navbar:gap-6">
      <div className="flex flex-col gap-4 flex-[70%] text-sm">
        <div className={wrapperDiv}>
          <MainInput
            label="نام *"
            id="fname"
            intent="login"
            inputSize="base"
            key="fname"
            defaultValue={data?.first_name}
            disabled
            className="disabled:opacity-60"
            ref={fanameRef}
          />
          <MainInput
            label="نام خانوادگی *"
            id="lname"
            intent="login"
            inputSize="base"
            key="lanme"
            defaultValue={data?.last_name}
            disabled
            className="disabled:opacity-60"
            ref={lnameRef}
          />
        </div>
        <div className={wrapperDiv}>
          <MainInput
            label="تلفن همراه *"
            id="mobile"
            intent="login"
            inputSize="base"
            key="mobile"
            defaultValue={data?.phone}
            disabled
            className="disabled:opacity-60"
            ref={phoneRef}
          />
          <MainInput
            label="تلفن ثابت"
            id="phone"
            intent="login"
            inputSize="base"
            key="phone"
            defaultValue={data?.fixPhone}
            disabled
            className="disabled:opacity-60"
          />
        </div>
        <div className={wrapperDiv}>
          <MainInput
            label="ایمیل"
            id="email"
            intent="login"
            inputSize="base"
            key="email"
            defaultValue={data?.email}
            disabled
            className="disabled:opacity-60"
          />
          <MainInput
            label="کد پستی"
            id="postalCode"
            intent="login"
            inputSize="base"
            key="postalCode"
            defaultValue={data?.codePostal}
            disabled
            className="disabled:opacity-60"
          />
        </div>
        {hasBook ? (
          <>
            <WithLoaderAndError
              {...{ data: statesData, isLoading, isError, error }}
            >
              <div className={wrapperDiv}>
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="state">استان</label>
                  <select
                    id="state"
                    className="border-0 outline-0 rounded-full cursor-pointer font-body text-black bg-lowPink focus:bg-white focus:border-lowPink focus:border-2 transition-all duration-300 p-4 w-full"
                    ref={stateRef}
                    onChange={(e) => handleStateChange(e)}
                  >
                    <option selected disabled>
                      لطفا استان خود را انتخاب کنید
                    </option>
                    {statesData?.map(({ stateId, stateName }) => (
                      <option key={stateId} value={stateId}>
                        {stateName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col w-full gap-2">
                  {isCityLoading ? (
                    <Loader />
                  ) : (
                    <>
                      <label htmlFor="city">شهر</label>
                      <select
                        id="city"
                        className="border-0 outline-0 rounded-full cursor-pointer font-body text-black bg-lowPink focus:bg-white focus:border-lowPink focus:border-2 transition-all duration-300 p-4 w-full"
                        ref={cityRef}
                        onChange={(e) => handleCityChange(e)}
                      >
                        <option selected disabled>
                          لطفا شهر خود را انتخاب کنید
                        </option>
                        {cities?.map(({ townId, townName }) => (
                          <option key={townId} value={townId}>
                            {townName}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
              </div>
            </WithLoaderAndError>
            {postPrice !== 0 ? (
              <div>
                <span>هزینه ارسال و پست : </span>
                <span>{usePersianNums(postPrice)} تومان</span>
              </div>
            ) : null}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="address">نشانی *</label>
              <textarea
                className="bg-lowPink rounded-xl resize-none p-4 outline-none transition-all duration-300 focus:bg-white focus:border focus:border-pink"
                id="address"
                cols={10}
                rows={5}
                defaultValue={data?.address}
                ref={addressRef}
              ></textarea>
            </div>
          </>
        ) : null}
      </div>
      <div className="flex-[40%] max-w-[21.5rem]">
        <CourseDetails header="جزئیات سفارش شما" key="2">
          <DetailsUl details={details} />
          <CheckboxWithText
            text="پرداخت آنلاین - درگاه زرین پال"
            isChecked={checkBoxes.pay}
            checkHandler={() => {
              changeCheckedHandler("pay");
            }}
            key={"pay"}
          />
          <CheckboxWithText
            text="من شرایط و قوانین سایت را خوانده ام و آن را میپذیرم"
            isChecked={checkBoxes.policy}
            checkHandler={() => {
              changeCheckedHandler("policy");
            }}
            key={"policy"}
          />
          <MainButton
            className="self-center w-full max-w-none"
            text={`پرداخت`}
            intent="purple"
            size="medium"
            onClick={handlePay}
            disabled={isPendingForBasket}
          />
        </CourseDetails>
      </div>
    </section>
  );
};

export default BasketUserInfo;
