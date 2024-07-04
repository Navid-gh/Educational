import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { UserState } from "../redux/user/userSlice";
import { useAppDispatch } from "../hooks/useReduxHooks";

export type PrivateAuth = {
  token: string;
  refresh: () => Promise<any>;
  updateAccessToken: ActionCreatorWithPayload<Pick<UserState, "token">>;
  dispatch: ReturnType<typeof useAppDispatch>;
};
