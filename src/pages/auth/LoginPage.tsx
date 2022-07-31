import React from "react";
import { LayoutAuth } from "../../components";
import { Alert, Button, Input, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authLogin, setError } from "../../store/slices";
interface Inputs{
  email: string;
  password: string;
}
export const LoginPage = () => {
  const {error}=useAppSelector(state=>state.auth);
  const dispatch=useAppDispatch();
  const { register,handleSubmit,formState:{errors} } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    dispatch(authLogin(data.email,data.password));
    console.log(data);
  }
  const handleClose=()=>{
    dispatch(setError(''));
  }

  return (
    <LayoutAuth>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="w-80 flex flex-col gap-5 bg-slate-700 p-5">
          <h1 className="text-center">Ingrese a su Cuenta</h1>
          <img
            src="https://res.cloudinary.com/react-romel/image/upload/v1658976998/logo_farmacia_qktagq.png"
            alt="logo_famacia"
          />
          <h1>Ingrese a su Cuenta</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <TextField
              id="email"
              label="Email"
              variant="standard"
              placeholder="Ingrese su Email"
              type="email"
              {
                ...register("email",{
                  required:{
                    value:true,
                    message:"El campo es requerido"
                  },
                  pattern:{
                    value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:"El email no es valido"
                  },
                  minLength:{
                    value:6,
                    message:"El email debe tener al menos 6 caracteres"
                  }
                })
              }
              error={!!errors?.email}
              helperText={errors.email?.message}
              autoComplete="off"
              fullWidth
            />

            <TextField
              id="password"
              label="Contraseña"
              variant="standard"
              placeholder="*************"
              type="password"
              className="text-white"
              {
                ...register("password",{
                  required:{
                    value:true,
                    message:"El campo es requerido"
                  },
                  minLength:{
                    value:6,
                    message:"La contraseña debe tener al menos 6 caracteres"
                  },
                })
              }
              error={!!errors?.password}
              helperText={errors.password?.message}
              autoComplete="off"
              fullWidth
            />
            <div className="mt-2"></div>
            <Button
              type="submit"
              className="w-full"
              variant="contained"
              color="primary"
            >
              Ingresar
            </Button>
            {
                !!error && 
                <Alert 
                severity="error"
                onClose={handleClose}
                >{error}</Alert>
              }
          </form>
        </div>
      </div>
    </LayoutAuth>
  );
};
