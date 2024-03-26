import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { token } from "../env";
import { ResponseMoviesType } from "../types/responseAllMovies";
import { ResponseMovieType } from "../types/responseMovie";
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
    getMovies: builder.query<ResponseMoviesType, string>({
      query: (titleFilm: string) => {
        return `/search?page=1&limit=10&query=${titleFilm}`;
      },
    }),
    getMoviesById: builder.query<ResponseMovieType, string>({
      query: (id) => `${id}`,
    }),
    // не могу типизировать getCurrentUserFavoritesMovies
    getCurrentUserFavoritesMovies: builder.query<any, any>({
      queryFn: async (
        moviesId: Array<string> = [],
        _queryApi,
        _extraOptions,
        baseQuery
      ) => {
        if (!moviesId) return;
        const results = await Promise.all(
          moviesId.map((id: string) =>
            baseQuery(`https://api.kinopoisk.dev/v1.4/movie/${id}`)
          )
        );

        const merged = results.map((result) => result.data);

        return { data: merged };
      },
    }),
  }),
});

export const {
  useLazyGetMoviesQuery,
  useGetMoviesByIdQuery,
  useGetCurrentUserFavoritesMoviesQuery,
} = moviesApi;
