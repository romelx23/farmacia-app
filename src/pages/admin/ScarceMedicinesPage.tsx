import { useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getInventaryProducts } from '../../store/slices';
import { Avatar } from '@mui/material';

export const ScarceMedicinesPage = () => {
    const { products } = useAppSelector( state => state.admin );

    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(getInventaryProducts());
    }, [])
  
    return (
      <div>
        <h1 className='text-center text-xl font-semibold mt-1 mb-3'>Medicamentos Agotandose</h1>
        
        <TableContainer component={Paper} sx={{overflowY: 'auto', height: 'auto', maxHeight: '70vh'}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Producto</TableCell>
                <TableCell align="center">Precio</TableCell>
                <TableCell align="center">Stock</TableCell>
                <TableCell align="center">Fecha de Expiración</TableCell>
                <TableCell align="center">Imagen</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row, index) => {
                if (row.stock <= 10) {
                    return(
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row"> {index + 1}</TableCell>
                        <TableCell component="th" scope="row"> {row.name} </TableCell>
                        <TableCell align="center">S/ {row.price}</TableCell>
                        <TableCell align="center">{row.stock}</TableCell>
                        <TableCell align="center">{`${row.expirationDate}`}</TableCell>
                        <TableCell align="center" sx={{display: 'flex', justifyContent: 'center'}}>
                            <Avatar alt={row.image} src={row.image} />
                        </TableCell>
                        </TableRow>
                  )
                }
            }
            )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
}
