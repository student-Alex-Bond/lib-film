import { FC } from 'react';
import { Heading } from '../../components/Heading';
import { useGetCurrentUserFavoritesMoviesQuery } from '../../features/movies.slice';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { CardItem } from '../../components/CardItem';
import styles from './Favorites.module.css';
import cn from 'classnames';
import { ResponseMovieType } from '../../types/responseMovie';
import { Loading } from '../../components/Loading';

export const Favorites: FC = () => {
  const favoriteMovies = useSelector(
    (state: RootState) => state.currentUser.favoritesMovies,
  );
  const { data, isLoading } = useGetCurrentUserFavoritesMoviesQuery(favoriteMovies);
  if (favoriteMovies.length === 0) return <div>У вас нет избранных фильмов</div>;

  return (
    <div>
      <Heading> Мои избранные фильмы</Heading>
      {isLoading ? (
        <div className={cn(styles.load)}>
          <Loading height={50} width={50} />
        </div>
      ) : (
        <ul className={cn(styles['favorite_list'])}>
          {data.map((movie: ResponseMovieType) => {
            return (
              <li key={movie.id + 1}>
                <CardItem
                  id={String(movie.id)}
                  name={movie.name}
                  poster={movie.poster.previewUrl}
                  rating={movie.rating.imdb}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
