import style from './SideWrapper.module.scss'
import type { ContentWraperProps } from "./type";

function SideWrapper({ children }: ContentWraperProps) {
    return <div className={style.sideWrapper}>
        <div>
            {children}
        </div>
    </div>;
}

export default SideWrapper;