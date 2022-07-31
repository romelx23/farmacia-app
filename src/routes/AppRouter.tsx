// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    console.log("startCheking");
  }, [user?.email]);

  if (loading) {
    return (
      <div
      className="loader-page"
      >
        <h1
          className="
          text-white
           font-bold
            text-3xl
            "
        >
          Espere....
        </h1>
        <div 
        className="
        animate-spin
        w-12 h-12 border-2 border-r-transparent border-purple-500
        "
        ></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
