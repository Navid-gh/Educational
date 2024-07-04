import { Outlet } from "react-router-dom";
import AdminNav from "../../Components/AdminNav";
import SeoTags from "../../utils/lib/Helmet";

const Admin = () => {
  return (
    <>
      <SeoTags
        titleTemplate={`پنل ادمین`}
        description={`پنل ادمین سایت صابر زارعی`}
        Url={window.location.href}
      />
      <main className="flex gap-4 my-4 min-h-[70svh]">
        <AdminNav />
        <div className="flex-[75%]">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Admin;
