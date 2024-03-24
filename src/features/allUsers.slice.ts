import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userType } from "./user.slice";

const initialState: Array<userType> = [];

export const allUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string }>) => {
      return [
        ...state,
        {
          name: action.payload.name,
          isLogined: true,
          favoritesMovies: [],
        },
      ]
        .reduce((acc: Array<userType>, user) => {
          if (!acc.find((v) => v.name == user.name)) {
            acc.push(user);
          }
          return acc;
        }, [])
        .map((user) =>
          user.name === action.payload.name
            ? { ...user, isLogined: true }
            : user
        );
    },
    logoutUser: (state, action: PayloadAction<{ name: string }>) => {
      return state.map((user) =>
        user.name === action.payload.name ? { ...user, isLogined: false } : user
      );
    },
    addToFavorites: (
      state,
      action: PayloadAction<{ id: string; currentUserName: string }>
    ) => {
      if (!action.payload.id) {
        return;
      }
      state.map((user) => {
        user.name === action.payload.currentUserName
          ? user.favoritesMovies.push(action.payload.id)
          : user;
      });
    },
    removeFromFavorites: (
      state,
      action: PayloadAction<{ id: string; currentUserName: string }>
    ) => {
      if (!action.payload.id) {
        return;
      }

     return state.map((user) => {
        return user.name === action.payload.currentUserName
          ? {
              ...user,
              favoritesMovies: user.favoritesMovies.filter(
                (movieId) => movieId !== action.payload.id
              ),
            }
          : user;
      });
    },
  },
});

export const { addUser, logoutUser, addToFavorites, removeFromFavorites } =
  allUsersSlice.actions;

export default allUsersSlice.reducer;
