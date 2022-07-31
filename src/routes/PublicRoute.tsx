import React, { FC, ReactElement, useContext } from 'react';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router'
import { useAppSelector } from '../hooks';

interface Props{
    children: ReactElement<any, any> | null;
}

export const PublicRoute:FC<Props> = ({children}) => {
    const {user,token}=useAppSelector(state=>state.auth);
    const {id}=user!;
    // const {user:{uid}} = useContext(AuthContext);
    return id
    ? <Navigate to="/"/>
    :children
}
