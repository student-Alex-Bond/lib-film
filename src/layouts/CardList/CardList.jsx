import styles from './CardList.module.css';
import cn from 'classnames';
import { CardItem } from '../../components/CardItem/CardItem';

export const CardList = ({poster, filmName, rating}) => {
    return(
        <ul className={cn(styles['card-list'])}>
            <CardItem 
                poster={poster}
                filmName={filmName}
                rating={rating}
            />
             <CardItem 
                poster={poster}
                filmName={filmName}
                rating={rating}
            />
             <CardItem 
                poster={poster}
                filmName={filmName}
                rating={rating}
            />
             <CardItem 
                poster={poster}
                filmName={filmName}
                rating={rating}
            />
             <CardItem 
                poster={poster}
                filmName={filmName}
                rating={rating}
            />
             <CardItem 
                poster={poster}
                filmName={filmName}
                rating={rating}
            />
        </ul>
    )
}