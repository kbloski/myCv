import style from './ContentWrapper.module.scss'
import type { ContentWraperProps } from "./type";

function ContentWrapper({ children }: ContentWraperProps) {
    return <div className={style.contentWrapper}>
        {children}
    </div>;
}

export default ContentWrapper;