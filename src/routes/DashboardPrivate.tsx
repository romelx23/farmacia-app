import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages";
import { RegisterPage } from "../pages/auth/RegisterPage";

export const DashboardPrivate = () => {
  // const {ToggleTheme}=useContext(UIContext);
  // className={`${ToggleTheme?'dark':''}`}
  return (
    <>
      <div>
        <Routes>
          <Route path="/ingresar" element={<LoginPage />} />
          <Route path="/registrate" element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
};
