
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
import { Button, Typography, TextField, Avatar  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from "react-hook-form";
import { createProduct, deleteProduct, getProductById, resetProduct, updateProduct } from '../../store/slices/admin/adminThunk';
import { ProductI } from '../../interfaces/product/product';
import {useState} from 'react';

export const InventoryPage = () => {
  const [productSelected, setProductSelected] = useState<ProductI | null>(null);
  const { error, products, product } = useAppSelector( state => state.admin );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInventaryProducts());
  }, [])

  useEffect(() => {
    if(product){
      setValue('name', product.name);
      setValue('description', product.description);
      setValue('price', product.price);
      setValue('stock', product.stock);
      setValue('expirationDate', product.expirationDate);
      setValue('image', product.image);
    }
  }, [product])

  const {open, handleOpen, handleClose} = useModal()
  const {open: openConfirm, handleOpen: handleOpenConfirm, handleClose: handleCloseConfirm} = useModal()

  const { register,handleSubmit,formState:{errors}, setValue, reset } = useForm<ProductI>();

  const onHide = () => {
    handleCloseConfirm()
    handleClose()
    setProductSelected(null)
    dispatch(resetProduct());
    reset()
  }


  const onDeleteModal = (product: ProductI) => {
    setProductSelected(product)
    handleOpenConfirm()
  }

  const onUpdateModal = (product: ProductI) => {
    handleOpen()
    dispatch(getProductById(product?.id!));
  }

  const onDeleteProduct = () => {
    dispatch(deleteProduct(productSelected?.id!));
    onHide()
  }

  const onSubmit = (data: any) => {
    if (product) {
      let formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("stock", data.stock);
      formData.append("expirationDate", data.expirationDate);
      formData.append("pharmacyId", '1');
      // formData.append("image", data.image[0]);
      dispatch(updateProduct(formData, product.id!));
      onHide()
      return
    }
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("expirationDate", data.expirationDate);
    formData.append("pharmacyId", '1');
    formData.append("image", data.image[0]);
    dispatch(createProduct(formData));
    onHide()
  }

  const inputProps = {
    step: '2',
  };
  

  return (
    <div>
      <h1 className='text-center text-xl font-semibold mt-1'>Inventario de Productos</h1>
      <Button variant="contained" sx={{marginY: '1rem'}} onClick={handleOpen} startIcon={<AddIcon />}>Nuevo</Button>
      <TableContainer component={Paper} sx={{overflowY: 'auto', height: 'auto', maxHeight: '70vh'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell align="center">Precio</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Fecha de Expiraci??n</TableCell>
              <TableCell align="center">Imagen</TableCell>
              <TableCell align="center" colSpan={2}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">S/ {row.price}</TableCell>
                <TableCell align="center">{row.stock}</TableCell>
                <TableCell align="center">{`${row.expirationDate}`}</TableCell>
                <TableCell align="center" sx={{display: 'flex', justifyContent: 'center'}}>
                  <Avatar alt={row.image} src={row.image} />
                </TableCell>
                <TableCell align="center">
                  <EditIcon onClick={() => onUpdateModal(row)} className='cursor-pointer' />
                </TableCell>
                <TableCell align="center">
                  <DeleteIcon onClick={() => onDeleteModal(row)} className='cursor-pointer' />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalComponent open={open} handleClose={onHide}>
        <div className='flex flex-col gap-y-5'>
          <h1 className='text-lg text-center font-semibold'>{product ? 'Actualizar Producto' : 'Crear Producto'} </h1>
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
              InputLabelProps={{
                shrink: true,
              }}
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
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
            
            <TextField
              id="price"
              label="Precio"
            //   variant="standard"
              placeholder="Ingrese Precio"
              inputProps={{
                step: 0.01,
              }}
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
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />

             <TextField
              id="stock"
              label="Stock"
            //   variant="standard"
              placeholder="Ingrese Stock"
              type="number"
              className="text-white"
              InputLabelProps={{
                shrink: true,
              }}
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
              label="Dia de Expiracion"
              type="date"
              className="text-white"
              InputLabelProps={{
                shrink: true,
              }}
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
            {
              product ? 
              (
                <div className='flex justify-center'>
                  <img src={product.image} alt={product.image} className='w-24 h-24' />
                </div>
              )
              :
              (
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
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />    
              )
            }
                     

            <div className="mt-2"></div>
            <div className='flex justify-between'>
            <Button variant="contained" color='error'  onClick={onHide}>Cancelar</Button>
            <Button variant="contained" type="submit">Guardar</Button>
            </div>
          </form>
        </div>
      </ModalComponent>
      <ModalComponent open={openConfirm} handleClose={onHide}>
        <div className='flex flex-col gap-y-5'>
          <h1 className='text-lg text-center font-semibold'>??Estas seguro que quieres eliminar el producto?</h1>
          <div className='flex justify-between'>
          <Button variant="contained" color='error' onClick={onHide}>Cancelar</Button>
          <Button variant="contained" onClick={onDeleteProduct} >Confirmar</Button>
          </div>
        </div>
      </ModalComponent>
    </div>
  )
}
