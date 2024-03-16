import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { token } from "../env";
export type userType = {
  name: string;
  isLogined: Boolean;
  favoritesMovies: Array<string>;
};

const initialState: userType = {
  name: "",
  isLogined: false,
  favoritesMovies: [],
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    siginUser: (state, action: PayloadAction<userType>) => {
      return (state = action.payload);
    },
    clearCurrentUser: (state) => {
      state.name = "";
      state.isLogined = false;
      state.favoritesMovies = [];
    },
  },
});

export const { siginUser, clearCurrentUser } = userSlice.actions;

export default userSlice.reducer;
