import styles from './CardItem.module.css';
import cn from 'classnames';
import { Rating } from '../Rating/Rating';
import { FC } from 'react';
import { AddInFavorites } from '../AddInFavorites/AddInFavorites';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../features/selectors';
import { CardItemProps } from './types';

export const CardItem: FC<CardItemProps> = ({ id, poster, name, rating }) => {
  const currentUserName = useSelector((state: RootState) => selectUserName(state));

  return (
    <div className={cn(styles['card-item'])}>
      <Link to={`/movie/${id}`}>
        <div className={cn(styles['wrapper-rating'])}>
          <Rating rating={rating} />
        </div>

        <img className={cn(styles.img)} src={poster} alt="постер фильма" />
        <h2 className={cn(styles.h2)}>{name}</h2>
      </Link>
      <AddInFavorites currentUserName={currentUserName} id={id} />
    </div>
  );
};
