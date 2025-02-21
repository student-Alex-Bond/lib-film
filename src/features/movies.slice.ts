import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseMoviesType } from '../types/responseAllMovies';
import { ResponseMovieType } from '../types/responseMovie';
import { fetchMoviesById } from '../helpers/fetchMovies';
import { token } from '../../env';
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1.4/',
    prepareHeaders: (headers) => {
      if (token) {
        headers.set('X-API-KEY', `${token}`);
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
    getInfoAboutActor: builder.query<any, string>({
      query: (id) => `person/${id}`,
    }),
    getCurrentUserFavoritesMovies: builder.query<any, string[]>({
      queryFn: async (ids) => {
        const promises = ids.map((id: string) => {
          return fetchMoviesById(id);
        });
        const results = await Promise.all(promises);
        return { data: results };
      },
    }),
  }),
});

export const {
  useLazyGetMoviesQuery,
  useGetMoviesByIdQuery,
  useGetInfoAboutActorQuery,
  useGetCurrentUserFavoritesMoviesQuery,
} = moviesApi;
