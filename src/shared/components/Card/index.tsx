import styles from './Card.module.scss';
import { CardInterface } from "./types";

function Card({ children, className } : CardInterface)
{
    return <div className={`${styles.Card} ${className}`}>
        { children}
    </div>
}

export default Card;