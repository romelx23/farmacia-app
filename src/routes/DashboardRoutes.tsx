import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { AdminPage, HomePage, PharmacyPage, RegisterPage } from '../pages';
import { LoginPage } from '../pages/auth/LoginPage';
import DashBoardAdminRoutes from './DashBoardAdminRoutes';

export const DashboardRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/administracion/*" element={<DashBoardAdminRoutes />}/>
      <Route path="/administrador/productos" element={<PharmacyPage />}/>
      <Route path="/admin" element={<AdminPage />}/>
      <Route path="/ingresar" element={<LoginPage />}/>
      <Route path="/registrate" element={<RegisterPage />}/>
    </Routes>
  </BrowserRouter>
  )
}
