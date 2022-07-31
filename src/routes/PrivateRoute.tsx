import React, { FC, ReactElement, useContext } from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { useAppSelector } from "../hooks";

interface Props{
    children: ReactElement<any, any> | null;
}

export const PrivateRoute:FC<Props> = ({children}) => {
    const {user}=useAppSelector(state=>state.auth);
    const {id}=user!;
    return id
    ? children
    :<Navigate to="/auth/ingresar"/>
};
