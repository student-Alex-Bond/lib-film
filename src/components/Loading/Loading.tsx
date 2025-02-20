import cn from 'classnames';
import styles from './Loading.module.css';
import loading from '../../assets/refresh.svg';
import { FC } from 'react';
type LoadingTypeProps = {
  width: number;
  height: number;
};
export const Loading: FC<LoadingTypeProps> = ({ width, height }) => {
  return (
    <div className={cn(styles.circle)}>
      <img width={width} height={height} src={loading} alt="loading icon" />
    </div>
  );
};
