import { createSlice } from '@reduxjs/toolkit'
const initialState={
   user:{}
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
    // aqui defines las actions
   }
})

// export const {increment,decrement,incremenByAumount} = userSlice.actions

export default userSlice.reducer