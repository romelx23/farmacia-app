import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { logAuth } from "../../../store/slices";

export const Navbar = () => {
  const navigate=useNavigate();
  const dispatch=useAppDispatch();
  const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    navigate("/auth/ingresar");
    dispatch(logAuth());
  }
  return (
    <div className="flex bg-blue-500 py-2 px-3 justify-between text-white">
      <Link 
        to="/"
      >
      <h1 className="font-bold text-xl font-mochi">Tú Farmacia</h1>
      </Link>
      <div className="flex gap-2">
        <Link to={"/mi-perfil"}>
          <h1>Mi perfil</h1>
        </Link>
        <button
            onClick={handleLogout}
            className=""
            >
            <h1>Salir</h1>
        </button>
      </div>
    </div>
  );
};
