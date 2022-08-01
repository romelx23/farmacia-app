import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductI } from "../../../interfaces";

interface IInitialState {
    products: ProductI[],
    product: ProductI | null,
    loading: boolean;
    error : string | null;
    message : string | null;
}

const initialState: IInitialState = {
    products: [] as ProductI[],
    product: null,
    loading: false,
    error: null,
    message: '',
};

export const adminSlice = createSlice({
   name: 'admin',
   initialState,
   reducers: {
    //    admin_getInventary: (state) => {
    //        state.products
    //    },
        admin_getInventaryProducts: (state, action: PayloadAction<ProductI[]>) => {
            state.products = action.payload
        },
        admin_getProductId: (state, action: PayloadAction<ProductI>) => {
            state.product = action.payload
        },
        admin_resetValues: (state) => {
            state.product = null
        },
        admin_createProduct: (state, action: PayloadAction<ProductI>) => {
            state.products = [...state.products, action.payload]
        },
        admin_deleteProduct: (state, action: PayloadAction<ProductI>) => {
            state.products = state.products.filter(product => product.name !== action.payload.name)
        },
        admin_updateProduct: (state, action: PayloadAction<ProductI>) => {
            state.products = state.products.map(product => product.id === action.payload.id ? action.payload : product)
        },
        admin_setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        admin_setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        }
    //    aincremenByAumount:(state, action)=>{
    //        console.log(action)
    //        state.count+=action.payload
    //    }
   }
})

export const {
    admin_getInventaryProducts, 
    admin_getProductId,
    admin_createProduct,
    admin_deleteProduct,
    admin_updateProduct,
    admin_setError, 
    admin_setMessage, 
    admin_resetValues,

} = adminSlice.actions

export default adminSlice.reducer