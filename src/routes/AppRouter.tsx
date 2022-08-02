// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { startChekingToken } from "../store/slices";
import { DashboardPrivate } from "./DashboardPrivate";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const {loading,user}=useAppSelector(state=>state.auth);
  // const { user, startCheking, checking } = useContext(AuthContext);
  const dispatch=useAppDispatch();
  
  useEffect(() => {
    dispatch(startChekingToken())
  }, [user?.email]);
  
  // if (loading) {
  //   console.log('Estamos dentro de loading')
  //   return (
  //     <div className="loader-page flex flex-col justify-center items-center gap-y-3">
  //       <h1
  //         className="text-white font-bold text-3xl"
  //       >
  //         Cargando
  //       </h1>
  //       <div 
  //       className="
  //       animate-spin
  //       w-12 h-12 border-2 border-r-transparent border-purple-500 rounded-full
  //       "
  //       ></div>
  //     </div>
  //   );
  // }

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute>
              <DashboardPrivate />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
};
