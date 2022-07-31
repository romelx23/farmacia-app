import { configureStore } from '@reduxjs/toolkit'
import { productSlice,authSlice, adminSlice } from './slices'
// import { counterSlice, pokemonSlice } from './slices'

export const store = configureStore({
  reducer: {
    product:productSlice.reducer,
    auth:authSlice.reducer,
    admin:adminSlice.reducer,
    // counter: counterSlice.reducer,
    // pokemon: pokemonSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch