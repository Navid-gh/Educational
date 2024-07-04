import SeoTags from "../../utils/lib/Helmet";
import { Outlet } from "react-router-dom";
import BasketNav from "../../Components/BasketNav";
import { useLocation } from "react-router-dom";

const Basket = () => {
  const url = useLocation().pathname.replace("/Basket", "");
  return (
    <>
      <SeoTags
        titleTemplate={`سبد خرید`}
        description={`صفحه ی ثبت سفارش و سبد خرید`}
        Url={window.location.href}
      />
      <main className="flex flex-col gap-8 py-6 px-12">
        <BasketNav currentUrl={url} />
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Basket;
