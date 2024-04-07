import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { token } from "../env";
import { ResponseMoviesType } from "../types/responseAllMovies";
import { ResponseMovieType } from "../types/responseMovie";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1.4/",
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
        return `movie/search?page=1&limit=10&query=${titleFilm}`;
      },
    }),
    getMoviesById: builder.query<ResponseMovieType, string>({
      query: (id) => `movie/${id}`,
    }),
    getInfoAboutActor: builder.query<any, any>({
      query: (id) => `person/${id}`,
    }),
    // getCurrentUserFavoritesMovies: builder.query<any, string[]>({
    //   queryFn: async (
    //     moviesId,
    //     _queryApi,
    //     _extraOptions,
    //     baseQuery
    //   ) => {
    //     const results = await Promise.all(
    //       moviesId.map((id: string) =>
    //         baseQuery(`https://api.kinopoisk.dev/v1.4/movie/${id}`)
    //       )
    //     )

    //     const merged = results.map((result) => result.data);
    //     const errors = results
    //       .filter((result) => result.error != null)
    //       .map((result) => result.error);

    //     if (errors.length > 0) return { error: errors };

    //     return { data: merged as ResponseMoviesType[] };
    //   },
    // }),
  }),
});

export const {
  useLazyGetMoviesQuery,
  useGetMoviesByIdQuery,
  useGetInfoAboutActorQuery,
  //useGetCurrentUserFavoritesMoviesQuery,
} = moviesApi;
