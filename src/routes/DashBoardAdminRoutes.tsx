import { Routes, Route } from "react-router-dom";
import { LayoutAdmin } from '../components';
import { InventoryPage, SalesPage } from '../pages';
  
const DashBoardAdminRoutes = () => {
  return (
    <LayoutAdmin>
        <Routes>
            <Route path="/inicio" element={<InventoryPage />}/>
            <Route path="/inventario" element={<InventoryPage />}/>
            <Route path="/reporte-ventas" element={<SalesPage />}/>
            <Route path="/medicamentos-agotandose" element={<InventoryPage />}/>
            <Route path="/registro-pedidos" element={<InventoryPage />}/>
            <Route path="/medicamentos-vendidos" element={<InventoryPage />}/>
        </Routes>
    </LayoutAdmin>
  )
}

export default DashBoardAdminRoutes