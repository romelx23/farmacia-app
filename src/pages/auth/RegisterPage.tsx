import { Button, TextField } from "@mui/material";
import React from "react";
import { LayoutAuth } from "../../components";

export const RegisterPage = () => {
  return (
    <LayoutAuth>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="w-80 flex flex-col gap-5 bg-slate-700 p-5">
          <h1 className="text-center">Cree una Cuenta</h1>
          <img
            src="https://res.cloudinary.com/react-romel/image/upload/v1658976998/logo_farmacia_qktagq.png"
            alt="logo_famacia"
          />
          <h1>Es muy sencillo Crear una Cuenta</h1>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            placeholder="Ingrese su Email"
            type="email"
          />
          <TextField
            id="password"
            label="Contraseña"
            variant="standard"
            placeholder="Ingrese su Contraseña"
            type="password"
            className="text-white"
          />
          <TextField
            id="password"
            label="Contraseña"
            variant="standard"
            placeholder="Ingrese su Contraseña"
            type="password"
            className="text-white"
          />
          <Button className="w-full" variant="contained" color="primary">
            Registrate
          </Button>
        </div>
      </div>
    </LayoutAuth>
  );
};
