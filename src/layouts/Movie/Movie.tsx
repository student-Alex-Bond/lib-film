import { FC } from 'react';
import cn from 'classnames';
import styles from './Movie.module.css';
import { Rating } from '../../components/Rating';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useGetMoviesByIdQuery } from '../../features/movies.slice';
import { AddInFavorites } from '../../components/AddInFavorites';

export const Movie: FC = () => {
  const { id } = useParams();
  const currentUserName = useSelector((state: RootState) => state.currentUser.name);

  const { data, isLoading } = useGetMoviesByIdQuery(id!);

  if (!data) return;

  if (isLoading) return <div>Losding...</div>;

  return (
    <div key={data.id}>
      <div className={cn(styles['head'])}>
        <span className={cn(styles['subtitle'])}>Поиск фильмов</span>
        <h2 className={cn(styles['title'])}>{`${data.name} ${
          data.alternativeName ? `(${data.alternativeName})` : ''
        }`}</h2>
      </div>
      <div className={cn(styles['content'])}>
        <img className={cn(styles['poster'])} src={data.poster.url} alt="постер фильма" />
        <div className={cn(styles['right-panel'])}>
          <div className={cn(styles['description'])}>{data.description}</div>
          <div className={cn(styles['rating'])}>
            <Rating rating={Number(data.rating.imdb)}></Rating>
            <AddInFavorites currentUserName={currentUserName} id={String(data.id)} />
          </div>
          <div className={cn(styles['details'])}>
            <span className={cn(styles['name'])}>Тип</span>
            <span className={cn(styles['info'])}>{data.type}</span>
            <span className={cn(styles['name'])}>Дата Выхода</span>
            <span className={cn(styles['info'])}>
              {data.premiere.world ? data.premiere.world.slice(0, 10) : ''}
            </span>
            <span className={cn(styles['name'])}>Жанр</span>
            <span className={cn(styles['info'])}>
              {data.genres.map((genre) => genre.name).join(', ')}
            </span>
          </div>
        </div>
      </div>
      <div className={cn(styles['comments'])}>
        {data.facts &&
          data.facts.map((fact) => {
            return (
              <div key={fact.type} dangerouslySetInnerHTML={{ __html: fact.value }} />
            );
          })}
      </div>
    </div>
  );
};
