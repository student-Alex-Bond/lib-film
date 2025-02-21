import styles from './AddInFavorites.module.css';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import like from './../../assets/like.svg';
import addedToFavorites from './../../assets/addedToFavorites.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../features/allUsers.slice';
import { RootState } from '../../store/store';
import { AddInFavoritesProps } from './types';
import { selectFavoriteMovies } from '../../features/selectors';

export const AddInFavorites: FC<AddInFavoritesProps> = ({ id, currentUserName }) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const dispatch = useDispatch();
  const userFavoritesMovies = useSelector((state: RootState) =>
    selectFavoriteMovies(state),
  );
  useEffect(() => {
    if (userFavoritesMovies.includes(id)) {
      setIsFavorite(false);
    }
  }, [userFavoritesMovies, id]);

  const appendInFavorite = () => {
    setIsFavorite(false);
    dispatch(addToFavorites({ id, currentUserName }));
  };
  const deleteFromFavorite = () => {
    setIsFavorite(true);
    dispatch(removeFromFavorites({ id, currentUserName }));
  };

  return (
    <>
      {isFavorite ? (
        <button type="button" onClick={appendInFavorite} className={cn(styles['button'])}>
          <img src={addedToFavorites} alt="иконка избранное" />
          <span className={cn(styles['button_span'])}>В избранное</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={deleteFromFavorite}
          className={cn(styles['button'], styles['active'])}
        >
          <img src={like} alt="иконка избранное" />В избранном
        </button>
      )}
    </>
  );
};
