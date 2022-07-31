import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex bg-blue-500 h-14 py-2 px-3 justify-between items-center text-white">
      <Link 
        to="/"
      >
      <h1 className="font-bold text-xl font-mochi">Tú Farmacia</h1>
      </Link>
      <div className="flex gap-2">
        <Link to={"/administracion"}>
          <h1>Administración</h1>
        </Link>
        <Link
            to={"/registrate"}
            className=""
            >
            <h1>Crea una cuenta</h1>
        </Link>
      </div>
    </div>
  );
};
