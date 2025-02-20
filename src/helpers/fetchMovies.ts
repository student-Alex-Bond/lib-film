import { token } from '../../env';
import { ResponseMovieType } from '../types/responseMovie';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': token,
  },
};

export const fetchMoviesById = (id: string) => {
  const data = fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return data as Promise<ResponseMovieType>;
};
