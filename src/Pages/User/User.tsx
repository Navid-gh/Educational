import { Outlet } from "react-router-dom";
import UserNav from "../../Components/UserNav";
import SeoTags from "../../utils/lib/Helmet";

const User = () => {
  return (
    <>
      <SeoTags
        titleTemplate={`پنل یوزر`}
        description={`پنل یوزر سایت صابر زارعی`}
        Url={window.location.href}
      />
      <main className="flex py-4 gap-4 userSummary:flex-col">
        <UserNav />
        <div className="flex-[75%] px-2">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default User;
