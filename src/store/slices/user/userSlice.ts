import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/user/user";
interface IInitialState {
  user: User | null;
  loading: boolean;
}
const initialState: IInitialState = {
  user: {} as User,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // aqui defines las actions
    // startLoadingLogin: (state) => {
    //   state.loading = true;
    // },
    // setUser: (state, action: PayloadAction<User>) => {
    //   state.user = action.payload;
    // },
  },
});

// export const {startLoadingLogin,setUser} = userSlice.actions

export default userSlice.reducer;
