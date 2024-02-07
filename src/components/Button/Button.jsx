import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children }) => {
    return (
        <button className={cn(styles.btn)}>
            { children }
        </button>
    )
}