import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/user/user";
interface IToken{
  access_token: string;
  refresh_token: string;
}
interface IInitialState {
  user: User | null;
  access_token:string;
  refresh_token:string;
  loading: boolean;
  error : string | null;
  message : string | null;
}
const initialState: IInitialState = {
  user: {} as User,
  access_token: '',
  refresh_token: '',
  loading: false,
  error: null,
  message: '',
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // aqui defines las actions
    startLoadingLogin: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<IToken>) => {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    logAuth: (state) => {
      state.user = {} as User;
      state.loading = false
    }
  },
});

export const {startLoadingLogin,setUser,setToken,setError,setMessage,logAuth} = authSlice.actions

export default authSlice.reducer;
