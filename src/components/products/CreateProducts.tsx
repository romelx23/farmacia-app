import React from "react";
import { LayoutAuth } from "../../components";
import { Button, Input, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
interface Inputs{
  name: string;
  description: string;
  price: number;
  stock: number;
  expirationDate: Date;
  pharmacyId: number;
  image: string;
}

const CreateProducts = () => {
    const { register,handleSubmit,formState:{errors} } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    console.log(data);
  }

  return (
    <LayoutAuth>
     <div className="flex flex-col items-center justify-center h-min">
        <div className="flex flex-col gap-5 bg-slate-700 p-5" style={{width: "350px"}}>
          <h1>Ingrese Productos</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextField
              id="name"
              label="Nombre"
              placeholder="Ingrese Nombre"
              type="text"
              {
                ...register("name",{
                  required:{
                    value:true,
                    message:"El campo es requerido"
                  },
                  minLength:{
                    value:6,
                    message:"Ingrese nombre"
                  }
                })
              }
              error={!!errors?.name}
              helperText={errors.name?.message}
              autoComplete="off"
              fullWidth
            />

            <TextField
              id="description"
              label="Descripcion"
            //   variant="standard"
              placeholder="Ingrese Descripcion"
              type="text"
              className="text-white"
              {
                ...register("description",{
                  required:{
                    value:true,
                    message:"El campo es requerido"
                  },
                  minLength:{
                    value:6,
                    message:"Ingrese Descripcion"
                  },
                })
              }
              error={!!errors?.description}
              helperText={errors.description?.message}
              autoComplete="off"
              fullWidth
            />

            <TextField
              id="price"
              label="Precio"
            //   variant="standard"
              placeholder="Ingrese Precio"
              type="number"
              className="text-white"
              {
                ...register("price",{
                  required:{
                    value:true,
                    message:"El campo es requerido"
                  },
                  minLength:{
                    value:6,
                    message:"Ingrese Precio"
                  },
                })
              }
              error={!!errors?.price}
              helperText={errors.price?.message}
              autoComplete="off"
              fullWidth
            />

             <TextField
              id="stock"
              label="Stock"
            //   variant="standard"
              placeholder="Ingrese Stock"
              type="number"
              className="text-white"
              {
                ...register("stock",{
                  required:{
                    value:true,
                    message:"El campo es requerido"
                  },
                  minLength:{
                    value:6,
                    message:"Ingrese Stock"
                  },
                })
              }
              error={!!errors?.stock}
              helperText={errors.stock?.message}
              autoComplete="off"
              fullWidth
            />  

             <TextField
              id="expirationDate"
              label="Dia de Expiracion"
              type="date"
              className="text-white"
              {
                ...register("expirationDate",{
                  required:{
                    value:true,
                    message:"El campo es requerido"
                  },
                  minLength:{
                    value:6,
                    message:"Ingrese fecha"
                  },
                })
              }
              error={!!errors?.expirationDate}
              helperText={errors.expirationDate?.message}
              autoComplete="off"
              fullWidth
            />           


             <TextField
              id="image"
              label="Imagen"
              type="file"
              className="text-white"
              {
                ...register("image",{
                  required:{
                    value:true,
                    message:"El campo es requerido"
                  },
                  minLength:{
                    value:6,
                    message:"Ingrese imagen"
                  },
                })
              }
              error={!!errors?.image}
              helperText={errors.image?.message}
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
          </form>
        </div>
      </div>
    </LayoutAuth>
  )
}

export {
    CreateProducts,
}

