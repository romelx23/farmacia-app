import { Alert, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LayoutAuth } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authRegister, setError, setMessage } from "../../store/slices";

interface Inputs {
  name:string;
  lastname:string;
  phone:string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const RegisterPage = () => {
  const {error,message}=useAppSelector(state=>state.auth);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  // const {name,lastname,phone,email,password}=getValues();
  const onSubmit = (data: Inputs) => {
    dispatch(authRegister(data.name,data.lastname,data.phone,data.email,data.password));
    console.log(data);
  };
  const handleClose=()=>{
    dispatch(setError(''));
  }
  const handleCloseMessage=()=>{
    dispatch(setMessage(''));
  }

  return (
    <LayoutAuth>
      <div className="flex flex-col items-center justify-center h-[80vh] px-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:grid max-w-7xl grid-cols-2 gap-5 bg-slate-700 p-5"
        >
          <div>
            <h1 className="text-center font-semibold">Cree una Cuenta</h1>
            <img
              src="https://res.cloudinary.com/react-romel/image/upload/v1658976998/logo_farmacia_qktagq.png"
              alt="logo_famacia"
            />
          </div>
          <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <h1 className="col-span-2 text-center font-semibold">Es muy sencillo Crear una Cuenta</h1>
            <TextField
              id="name"
              label="Nombre"
              variant="standard"
              placeholder="Ingrese su Nombre"
              type="nombre"
              {...register("name", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                minLength: {
                  value: 4,
                  message: "El nombre debe tener al menos 6 caracteres",
                },
              })}
              error={!!errors?.name}
              helperText={errors.name?.message}
              autoComplete="off"
              fullWidth
            />
            <TextField
              id="lastname"
              label="Apellido"
              variant="standard"
              placeholder="Ingrese su Apellido"
              type="lastname"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                minLength: {
                  value: 6,
                  message: "El apellido debe tener al menos 6 caracteres",
                },
              })}
              error={!!errors?.lastname}
              helperText={errors.lastname?.message}
              autoComplete="off"
              fullWidth
            />
            <TextField
              id="phone"
              label="Telefono"
              variant="standard"
              placeholder="Ingrese su Telefono"
              type="tel"
              {...register("phone", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                minLength: {
                  value: 9,
                  message: "El teléfono debe tener 9 caracteres",
                },
                // pattern: {
                //   value: /^[0-9]{9}$/,
                //   message: "El teléfono debe tener 9 caracteres",
                // },
                // +51 987 987 987
                pattern: {
                  value: /^\+?\d{9}$/,
                  message: "El teléfono debe tener 9 caracteres",
                },

              })}
              error={!!errors?.phone}
              helperText={errors.phone?.message}
              autoComplete="off"
              fullWidth
            />
            

            <TextField
              id="email"
              label="Email"
              variant="standard"
              placeholder="Ingrese su Email"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "El email no es valido",
                },
                minLength: {
                  value: 6,
                  message: "El email debe tener al menos 6 caracteres",
                },
              })}
              error={!!errors?.email}
              helperText={errors.email?.message}
              autoComplete="off"
              fullWidth
            />
            <TextField
              id="password"
              label="Contraseña"
              variant="standard"
              placeholder="**********"
              type="password"
              className="text-white"
              {...register("password", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
                validate: (value) =>
                  value === getValues("passwordConfirm") ||
                  "Las contraseñas no coinciden",
              })}
              error={!!errors?.password}
              helperText={errors.password?.message}
              autoComplete="off"
              fullWidth
            />
            <TextField
              id="password2"
              label="Vuelva Escribir la Contraseña"
              variant="standard"
              placeholder="Ingrese su Contraseña"
              type="password"
              className="text-white"
              {...register("passwordConfirm", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
                validate: (value) =>
                  value === getValues("password") ||
                  "Las contraseñas no coinciden",
              })}
              error={!!errors?.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
              autoComplete="off"
              fullWidth
            />
            <div className="col-span-1 md:col-span-2 space-y-2">
            <Button
              type="submit"
              className="w-full h-10"
              variant="contained"
              color="primary"
            >
              Registrate
            </Button>
            <Alert severity="info">
              Ya tienes una cuenta?{" "}
              <Link to="/auth/ingresar" className="text-white">
                Inicia Sesion
              </Link>
            </Alert>
            {
              !!message && (
                <Alert severity="success">
                  {message}
                </Alert>
              )
            }
              {
                !!error && 
                <Alert 
                severity="error"
                onClose={handleClose}
                >{error}</Alert>
              }
            </div>
          </div>
        </form>
      </div>
    </LayoutAuth>
  );
};
