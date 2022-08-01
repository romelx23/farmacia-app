import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import moment from "moment";
import { pharmacyApi } from "../../../api";
import { ProductI } from "../../../interfaces";
import { OrderI } from "../../../interfaces/orders/orders";
import { RootState } from "../../store";
import { admin_createProduct, admin_deleteProduct, admin_getInventaryProducts, admin_getOrderById, admin_getOrders, admin_getProductId, admin_resetValues, admin_setError, admin_setMessage, admin_updateProduct } from "./adminSlice";
  
export const getInventaryProducts = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
      try {
        const { data } = await pharmacyApi.get<ProductI[]>("/products");
        dispatch(admin_getInventaryProducts(data));
      } catch (error: any) {
        dispatch(admin_setError("Hubo un error al cargar los productos."));
        throw error;
      }
    };
};

export const createProduct = (product: any): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await pharmacyApi.post<ProductI>("/products", product);
      data.expirationDate = moment(data.expirationDate).format("YYYY-MM-DD");
      dispatch(admin_createProduct(data));
      dispatch(admin_setMessage('Producto creado exitosamente.'));
    } catch (error: any) {
      dispatch(admin_setError("Hubo al error al crear el producto."));
      throw error;
    }
  };
};

export const deleteProduct = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await pharmacyApi.delete<ProductI>(`/products/${id}`);
      dispatch(admin_deleteProduct(data));
      dispatch(admin_setMessage('Producto eliminado exitosamente.'));
    } catch (error: any) {
      dispatch(admin_setError("Hubo al error al eliminar el producto."));
      throw error;
    }
  };
};

export const getProductById = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await pharmacyApi.get<ProductI>(`/products/${id}`);
      dispatch(admin_getProductId(data));
    } catch (error: any) {
      dispatch(admin_setError("Hubo al error al obtener el producto."));
      throw error;
    }
  };
};

export const updateProduct = (product: any, id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await pharmacyApi.put<ProductI>(`/products/${id}`, product);
      data.expirationDate = moment(data.expirationDate).format("YYYY-MM-DD");
      dispatch(admin_updateProduct(data));
      dispatch(admin_setMessage('Producto actualizado exitosamente.'));
    } catch (error: any) {
      dispatch(admin_setError("Hubo al error al actualizar el producto."));
      throw error;
    }
  };
};

export const resetProduct = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(admin_resetValues());
    } catch (error: any) {
      throw error;
    }
  };
};
  

export const getOrders = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await pharmacyApi.get<OrderI[]>("/orders");
      dispatch(admin_getOrders(data));
    } catch (error: any) {
      dispatch(admin_setError("Hubo un error al cargar los productos."));
      throw error;
    }
  };
};

export const getOrderById = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await pharmacyApi.get<OrderI>(`/orders/${id}`);
      dispatch(admin_getOrderById(data));
    } catch (error: any) {
      dispatch(admin_setError("Hubo al error al obtener la orden."));
      throw error;
    }
  };
};