import { TheTitle } from '../../TheTitle';
import style from '../styles/BulletListItem.module.scss'
import type { BulletListItemProps } from "../types";

function BulletListItem({ children, title, subtitle} : BulletListItemProps){
    return (
        <li className={style.bulletListItem}>
            <div className={style.bulletListItemContent}>
                {subtitle && <TheTitle tag={6} className={style.subtitle}> {subtitle}</TheTitle> }
                {title && <TheTitle tag={5} className={style.title}>{title}</TheTitle>}
                { children && <p className={style.description}>{children}</p>}
            </div>
        </li>
    );
}

export default BulletListItem;