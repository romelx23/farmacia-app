import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from '../hooks/redux/useAppSelector';
import DashBoardAdminRoutes from './DashBoardAdminRoutes';
import {
  AdminPage,
  HomePage,
  PharmacyPage,
  RegisterPage,
  LoginPage,
} from "../pages";
export const DashboardRoutes = () => {
  const {user}=useAppSelector(state=>state.auth);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/administracion/*" element={<DashBoardAdminRoutes />}/>
          <Route path="/administrador/productos" element={<PharmacyPage />}/>
          <Route path="/admin" element={<AdminPage />}/>
        </Routes>
      </div>
    </>
  );
};
