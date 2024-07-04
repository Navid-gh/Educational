import { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import type { Roles } from "../Types/Roles";

type Props = {
  allowedRoles: Roles[];
  children: ReactNode;
};

const RequireAuth = ({ allowedRoles, children }: Props) => {
  const { role, Auth } = useAuth();
  const location = useLocation();

  return allowedRoles.find((allowedRole) => allowedRole === role) && Auth ? (
    <>{children}</>
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
