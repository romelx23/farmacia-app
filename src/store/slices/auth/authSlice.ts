import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/user/user";
interface IInitialState {
  user: User | null;
  token:string;
  loading: boolean;
  error : string | null;
  message : string | null;
}
const initialState: IInitialState = {
  user: {} as User,
  token: '',
  loading: false,
  error: null,
  message: '',
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // aqui defines las actions
    startLoadingLogin: (state) => {
      state.loading = true;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    }
  },
});

export const {startLoadingLogin,setUser,setToken,setError,setMessage} = authSlice.actions

export default authSlice.reducer;
