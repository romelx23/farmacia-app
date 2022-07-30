import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { pharmacyApi } from "../../../api";
import { UserI } from "../../../interfaces";
import { RootState } from "../../store";
// import { setUser, startLoadingLogin } from "./userSlice";

export const authLogin = (
  email: string,
  password: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
    //   dispatch(startLoadingLogin);
      const { data } = await pharmacyApi.post<UserI>("/auth/login", {
        email,
        password,
      });
    //   dispatch(setUser(data.user));
    } catch (error: any) {
      throw error;
    }
  };
};
