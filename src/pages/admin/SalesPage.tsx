import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector, useModal } from "../../hooks";
import { getOrders, resetProduct } from '../../store/slices';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ModalComponent } from '../../components/shared/ModalComponent';
import { Avatar, Button } from '@mui/material';
import { OrderI } from '../../interfaces/orders/orders';
import { getOrderById } from '../../store/slices/admin/adminThunk';

export const SalesPage = () => {
  const { error, orders, order }=useAppSelector( state => state.admin );

  const dispatch = useAppDispatch();
  const {open, handleOpen, handleClose} = useModal()

  const onHide = () => {
    handleClose()
    // setProductSelected(null)
    dispatch(resetProduct());
  }

  const onShowModal = (order: OrderI) => {
    dispatch(getOrderById(order?.id!));
    handleOpen()
  }

  useEffect(() => {
    dispatch(getOrders());
  }, [])
  
  return (
    <div>
      <h1 className='text-center text-xl font-semibold mt-1 mb-3'>Ventas Realizadas</h1>
      <TableContainer component={Paper} sx={{overflowY: 'auto', height: 'auto', maxHeight: '70vh'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell align="center">Apellidos</TableCell>
              <TableCell align="center">Celular</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center" colSpan={2}>Ver Detalles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row, index) => {
              if (index < 5) {
                return(
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.customer.name}
                    </TableCell>
                    <TableCell align="center">{row.customer.lastname}</TableCell>
                    <TableCell align="center">{row.customer.phone}</TableCell>
                    <TableCell align="center">S/ {row.total.toFixed(2)}</TableCell>
                    <TableCell align="center">
                      <VisibilityIcon 
                        onClick={() => onShowModal(row)} 
                        className='cursor-pointer' />
                    </TableCell>
                  </TableRow>
                )
              }
            }
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalComponent open={open} handleClose={onHide} size='70vw'>
        <div className='flex flex-col gap-y-5'>
          <h1 className='text-lg text-center font-semibold'>Detalles de la Orden</h1>
          {
            order && (
              <div className='flex flex-col gap-y-3'>
                <div className='grid grid-cols-3 text-center gap-y-2'>
                  <div className='col-span-3 md:col-span-1'>
                    Nombre Completo: {order.customer.name}  {order.customer.lastname}
                  </div>
                  <div className='col-span-3 md:col-span-1'>
                    Telefono: {order.customer.phone}
                  </div>
                  <div className='col-span-3 md:col-span-1'>
                    Total: S/ {order.total.toFixed(2)}
                  </div>
                </div>
                <div>
                  <TableContainer component={Paper} sx={{overflowY: 'auto'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Producto</TableCell>
                          <TableCell align="center">Fecha de Expiración</TableCell>
                          <TableCell align="center">Precio</TableCell>
                          <TableCell align="center">Cantidad</TableCell>
                          <TableCell align="center">SubTotal</TableCell>
                          <TableCell align="center">Imagen</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {order.products.map((row, index) => (
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
                            <TableCell align="center">{`${row.expirationDate}`}</TableCell>
                            <TableCell align="center">S/ {row.price}</TableCell>
                            <TableCell align="center">{row.quantity.toFixed(2)}</TableCell>
                            <TableCell align="center">S/ {(row.quantity * row.price).toFixed(2)}</TableCell>
                            <TableCell align="center" sx={{display: 'flex', justifyContent: 'center'}}>
                              <Avatar alt={row.image} src={row.image} />
                            </TableCell>
                          </TableRow>
                        )
                      )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            )
          }
          <div className='flex justify-center'>
            <Button variant="contained" fullWidth  onClick={onHide}>Regresar</Button>
          </div>
        </div>
      </ModalComponent>
    </div>
  )
}
