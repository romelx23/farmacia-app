import { Routes, Route } from "react-router-dom";
import { LayoutAdmin } from '../components';
import { InventoryPage, SalesPage, OrdersPage, ScarceMedicinesPage } from '../pages';
  
const DashBoardAdminRoutes = () => {
  return (
    <LayoutAdmin>
        <Routes>
            <Route path="/inicio" element={<InventoryPage />}/>
            <Route path="/inventario" element={<InventoryPage />}/>
            <Route path="/reporte-ventas" element={<SalesPage />}/>
            <Route path="/medicamentos-agotandose" element={<ScarceMedicinesPage />}/>
            <Route path="/registro-pedidos" element={<OrdersPage />}/>
            <Route path="/medicamentos-vendidos" element={<SalesPage />}/>
        </Routes>
    </LayoutAdmin>
  )
}

export default DashBoardAdminRoutes