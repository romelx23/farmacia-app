import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Navbar } from '../components';
import { CreateProducts } from '../components/products/CreateProducts';
import { AdminPage, HomePage, PharmacyPage, RegisterPage } from '../pages';
import { LoginPage } from '../pages/auth/LoginPage';
export const DashboardRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/mi-perfil" element={<AdminPage />}/>
      <Route path="/administrador/productos" element={<PharmacyPage />}/>
      <Route path="/admin" element={<AdminPage />}/>
      <Route path="/ingresar" element={<LoginPage />}/>
      <Route path="/registrate" element={<RegisterPage />}/>
      <Route path="/registerProduct" element={<CreateProducts />}/>
      
    </Routes>
    {/* <Navbar/> */}
  </BrowserRouter>
  )
}
