import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { token } from "../env";
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1.4/movie/",
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("X-API-KEY", `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<any, any>({
      query: (titleFilm: string) => {
        return `/search?page=1&limit=10&query=${titleFilm}`;
      },
    }),
    getMoviesById: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useLazyGetMoviesQuery, useGetMoviesByIdQuery } = moviesApi;
