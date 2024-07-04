import SeoTags from "../../utils/lib/Helmet";
import MainButton from "../../Components/UI/MainButton";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <SeoTags
        titleTemplate={`ورود و ثبت نام`}
        description="صفحه ی ورود به سایت "
        Url={window.location.href}
      />
      <main className="h-screen bg-lowPink flex flex-col items-center gap-4 py-12">
        <img
          src="/images/404.png"
          alt="notfound-image"
          className="h-[15rem] "
          loading="lazy"
        />
        <div className="flex flex-col gap-3">
          <h1>صفحه ی مورد نظر یافت نشد!</h1>
          <Link to="/">
            <MainButton
              intent="black"
              text="برگرد صفحه اصلی"
              className="self-center w-full max-w-none"
              size="medium"
            />
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
