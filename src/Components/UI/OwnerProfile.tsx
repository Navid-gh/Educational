import { Link } from "react-router-dom";
import { cn } from "../../utils/lib/Cn";
import Avatar from "./Icons/Avatar";

type Props = {
  profile: string;
  name: string;
  className?: string;
};

const OwnerProfile = ({ name, profile, className }: Props) => {
  return (
    <div className={cn("flex gap-4 items-center", className)}>
      {profile ? (
        <Link to={"/About-us"}>
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={profile}
            alt="profile"
          />
        </Link>
      ) : (
        <Avatar className="w-8 h-8" />
      )}
      <Link to={"/About-us"} className="flex items-center justify-center">
        <span>{name}</span>
        <span className="text-sm">(کلیک کنید)</span>
      </Link>
    </div>
  );
};

export default OwnerProfile;
