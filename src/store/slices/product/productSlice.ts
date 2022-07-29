import { createSlice } from '@reduxjs/toolkit'
const initialState={
   count:0
}

export const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
       increment: (state) => {
           state.count++
       },
       decrement:(state)=>{
           state.count--
       },
       incremenByAumount:(state,action)=>{
           console.log(action)
           state.count+=action.payload
       }
   }
})

export const {increment,decrement,incremenByAumount} = productSlice.actions

export default productSlice.reducer