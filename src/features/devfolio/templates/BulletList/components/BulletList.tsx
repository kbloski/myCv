import { TheTitle } from '../../TheTitle'
import style from "../styles/BulletList.module.scss";
import type { BulletListProps } from "../types";

function BulletList({ children, title }: BulletListProps) {
    return <div>
        <TheTitle tag={4} className={style.title}>{title}</TheTitle>
        <ul className={style.bulletList}>
            {children}
        </ul>
    </div>
}

export default BulletList;
