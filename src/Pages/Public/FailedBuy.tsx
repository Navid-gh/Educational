import { Link } from "react-router-dom";
import Tick from "../../Components/UI/Icons/Tick";
import MainButton from "../../Components/UI/MainButton";
import SeoTags from "../../utils/lib/Helmet";

const FailedBuy = () => {
  return (
    <>
      <SeoTags
        titleTemplate={`صفحه خرید ناموفق`}
        description="صفحه ی خرید ناموفق سایت صابر زارعی"
        Url={window.location.href}
      />
      <main className="flex justify-center items-center h-[35vh]">
        <section className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">خطا در پرداخت</h1>
          <div className="flex items-center">
            <span>خرید شما با خطا مواجه شد</span>
            <Tick className="fill-red-500 w-8 h-8" />
          </div>
          <Link to="/Basket">
            <MainButton
              className="self-center w-full max-w-none"
              text={`بازگشت به سبد خرید`}
              intent="purple"
              size="medium"
            />
          </Link>
        </section>
      </main>
      ;
    </>
  );
};

export default FailedBuy;
