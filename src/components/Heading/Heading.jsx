import styles from './Heading.module.css';
import cn from 'classnames';

export const Heading = ({ children }) => { 
    return(
        <h1 className={cn(styles.heading)}>
            { children }
        </h1>
    );
}