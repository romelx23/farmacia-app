import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { pharmacyApi } from "../../../api";
import { RegisterResponse, UserI } from "../../../interfaces";
import { RootState } from "../../store";
import Cookies from 'js-cookie'
import {
  setError,
  setMessage,
  setToken,
  setUser,
  startLoadingLogin,
} from "./authSlice";

export const authLogin = (
  email: string,
  password: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingLogin(true));
      const { data } = await pharmacyApi.post<UserI>("/auth/login", {
        email,
        password,
      });
      const { user, refresh_token, access_token } = data;
      dispatch(setToken({ access_token, refresh_token }));
      dispatch(setUser(user));
      Cookies.set('access_token', access_token);
      Cookies.set('refresh_token', refresh_token);
      dispatch(startLoadingLogin(false));
      // localStorage.setItem("access_token", access_token);
      // localStorage.setItem("refresh_token", refresh_token);
    } catch (error: any) {
      dispatch(setError("Error al iniciar sesión"));
      throw error;
    }
  };
};

export const authRegister = (
  name: string,
  lastname: string,
  phone: string,
  email: string,
  password: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingLogin(true));
      const { data } = await pharmacyApi.post<RegisterResponse>("/users", {
        name,
        lastname,
        phone,
        email,
        password,
      });
      dispatch(startLoadingLogin(false));
      dispatch(setMessage("Se ha registrado correctamente"));
    } catch (error: any) {
      dispatch(setError("Error al registrarse"));
      throw error;
    }
  };
};

export const startChekingToken = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingLogin(true));
      const access_token1 = Cookies.get('access_token');
      const refresh_token1 = Cookies.get('refresh_token');
      const { data } = await pharmacyApi.post<UserI>(
        "/auth/refreshToken",
        {},
        {
          headers: {
            "Authorization": `Bearer ${access_token1}`,
            "httpOnly": true,
            "Content-Type": "application/json",
            "Accept": "application/json",
            "withCredentials": true,
            "Cookie": `access_token=${access_token1};refresh_token=${refresh_token1}`,
          },
        }
      );
      // console.log(data);
      // console.log(data.user);
      const { user, access_token, refresh_token } = data;
      dispatch(setUser(user));
      dispatch(setToken({access_token,refresh_token}));
      Cookies.set('access_token', access_token);
      Cookies.set('refresh_token', refresh_token);
      dispatch(startLoadingLogin(false));
      // localStorage.setItem("access_token", access_token);
      // localStorage.setItem("refresh_token", refresh_token);
    } catch (error: any) {
      throw error;
    }
  };
};
