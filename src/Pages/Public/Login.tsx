import SeoTags from "../../utils/lib/Helmet";
import LogoIcon from "../../Components/UI/Icons/Logo";
import TabController from "../../Components/TabController";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <SeoTags
        titleTemplate={`ورود و ثبت نام`}
        description="صفحه ی ورود به سایت "
        Url={window.location.href}
      />
      <main className="flex items-center justify-center login-radial h-screen">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="w-full h-full flex items-center justify-center"
            >
              <LogoIcon
                className="w-16 h-16 max-w-[2.75rem] max-h-[2.75rem] rounded-lg overflow-hidden"
                id="login-logo"
              />
            </Link>
            <span className="text-white text-3xl font-bold self-center">
              آکادمی فن بیان صابر زارعی
            </span>
          </div>
          <TabController />
        </div>
      </main>
    </>
  );
};

export default Login;
