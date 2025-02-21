import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const selectedUser = (state: RootState) => state.currentUser;
export const selectedAllUsers = (state: RootState) => state.allUsers

export const selectFavoriteMovies = createSelector([selectedUser],(user) => user.favoritesMovies )
export const selectUserName = createSelector([selectedUser],(user) => user.name )
export const selectUserLogined = createSelector([selectedUser],(user) => user.isLogined )
export const selectAllUsers = createSelector([selectedAllUsers],(allUsers) => allUsers)