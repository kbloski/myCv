import style from '../styles/BulletListItem.module.scss'
import type { BulletListItemProps } from "../types";

function BulletListItem({ children, title, subtitle} : BulletListItemProps){
    return (
        <li className={style.bulletListItem}>
            <div className={style.bulletListItemContent}>
                {subtitle && <div className={style.subtitle}> {subtitle}</div> }
                {title && <div className={style.title}>{title}</div>}
                { children && <div className={style.description}>{children}</div>}
            </div>
        </li>
    );
}

export default BulletListItem;