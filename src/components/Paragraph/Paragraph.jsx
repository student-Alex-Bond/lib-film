import  cn from 'classnames';
import styles from './Paragraph.module.css';

export const Paragraph = ({ children, fs}) => {
    
    return(
        <p className={cn(styles.paragraph)} style={{fontSize: `${fs}`}}>
            { children }
        </p>
    )
}
