import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { pharmacyApi } from "../../../api";
import { RegisterResponse, UserI } from "../../../interfaces";
import { RootState } from "../../store";
import { setError, setMessage, setToken, setUser, startLoadingLogin } from "./authSlice";

export const authLogin = (
  email: string,
  password: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingLogin);
      const { data } = await pharmacyApi.post<UserI>("/auth/login", {
        email,
        password,
      });
      dispatch(setToken(data.access_token));
      dispatch(setUser(data.user));
      localStorage.setItem("token", data.access_token);
    } catch (error: any) {
      dispatch(setError("Error al iniciar sesión"));
      throw error;
    }
  };
};

export const authRegister = (
  name:string,
  lastname:string,
  phone:string,
  email: string,
  password: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingLogin);
      const { data } = await pharmacyApi.post<RegisterResponse>("/users", {
        name,
        lastname,
        phone,
        email,
        password,
      });
      dispatch(setMessage('Se ha registrado correctamente'));
    } catch (error: any) {
      dispatch(setError("Error al registrarse"));
      throw error;
    }
  };
};

export const startChekingToken = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await pharmacyApi.get<UserI>("/auth/checkToken");
      dispatch(setUser(data.user));
      dispatch(setToken(data.access_token));
      localStorage.setItem("token", data.access_token);
    } catch (error: any) {
      throw error;
    }
  };
}

