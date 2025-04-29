import style from "../styles/BulletList.module.scss";
import type { BulletListProps } from "../types";

function BulletList({ children }: BulletListProps) {
    return  <ul className={style.bulletList}>
        {children}
    </ul>
}

export default BulletList;
