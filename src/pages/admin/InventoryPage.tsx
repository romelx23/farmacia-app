
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector, useModal } from "../../hooks";
import { useEffect } from 'react';
import { getInventaryProducts } from '../../store/slices';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ModalComponent } from '../../components/shared/ModalComponent';
import { Button, Typography, TextField  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from "react-hook-form";
import { createProduct } from '../../store/slices/admin/adminThunk';
import { ProductI } from '../../interfaces/product/product';

// interface Inputs{
//   name: string;
//   description: string;
//   price: number;
//   stock: number;
//   expirationDate: Date;
//   pharmacyId: number;
//   image: string;
// }

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface Inputs{
  name: string;
  description: string;
  price: number;
  stock: number;
  expirationDate: Date;
  pharmacyId: number;
  image: string;
}

export const InventoryPage = () => {
  const { error, products }=useAppSelector( state => state.admin );
  console.log(products)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInventaryProducts());
  }, [])

  const {open, handleOpen, handleClose} = useModal()
  const {open: openConfirm, handleOpen: handleOpenConfirm, handleClose: handleCloseConfirm} = useModal()

  const { register,handleSubmit,formState:{errors} } = useForm<ProductI>();

  const onSubmit = (data: any) => {
    console.log(data);
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("expirationDate", data.expirationDate);
    formData.append("pharmacyId", data.pharmacyId);
    formData.append("image", data.image);
    dispatch(createProduct(formData));
  }

  return (
    <div>
      <h1 className='text-center text-xl font-semibold'>Inventario</h1>
      <Button variant="contained" sx={{marginY: '1rem'}} onClick={handleOpen} startIcon={<AddIcon />}>Nuevo</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              {/* <TableCell align="right">Descripción</TableCell> */}
              <TableCell align="center">Precio</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Imagen</TableCell>
              <TableCell align="center">Fecha de Expiración</TableCell>
              <TableCell align="center" colSpan={2}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">
                  <EditIcon onClick={handleOpen} className='cursor-pointer' />
                </TableCell>
                <TableCell align="center">
                  <DeleteIcon onClick={handleOpenConfirm} className='cursor-pointer' />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalComponent open={open} handleClose={handleClose}>
        <div className='flex flex-col gap-y-5'>
          <h1 className='text-lg text-center font-semibold'>Crear Producto</h1>
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
                    value:1,
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
                    value:1,
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
              // label="Dia de Expiracion"
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
              // label="Imagen"
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
            {/* <Button
              type="submit"
              className="w-full"
              variant="contained"
              color="primary"
            >
              Ingresar
            </Button> */}
            <div className='flex justify-between'>
            <Button variant="contained" color='error'  onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" type="submit">Guardar</Button>
            </div>
          </form>
        </div>
      </ModalComponent>
      <ModalComponent open={openConfirm} handleClose={handleCloseConfirm}>
        <div className='flex flex-col gap-y-5'>
          <h1 className='text-lg text-center font-semibold'>¿Estas seguro que quieres eliminar el producto?</h1>
          <div className='flex justify-between'>
          <Button variant="contained" color='error' onClick={handleCloseConfirm}>Cancelar</Button>
          <Button variant="contained">Confirmar</Button>
          </div>
        </div>
      </ModalComponent>
    </div>
  )
}
