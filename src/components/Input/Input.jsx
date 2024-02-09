import cn from 'classnames';
import styles from './Input.module.css';

export const Input = ({placeholder, isIcon, value, onCange}) => {
    const cl = isIcon ? styles.label : '';
    const pl = isIcon ? styles.pl : '';
    return (
        <label className={cn(cl)}>
            <input
                value={value}
                onChange={onCange}
                className={cn(styles.input, pl)}
                placeholder={placeholder}
            />
        </label>
       
    )
}