import React from "react";
import { Link } from "react-router-dom";

export const NavbarAuth = () => {
  return (
    <div className="flex bg-blue-500 py-2 px-3 justify-between text-white">
      <Link 
        to="/"
      >
      <h1 className="font-bold text-xl font-mochi">Tu Farmacia</h1>
      </Link>
      <div className="flex gap-2">
        <Link to={"/auth/ingresar"}>
          <h1>Ingresar</h1>
        </Link>
        <Link
            to={"/auth/registrate"}
            >
            <h1>Crea una cuenta</h1>
        </Link>
      </div>
    </div>
  );
};
