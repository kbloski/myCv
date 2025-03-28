import style from './ContentWrapper.module.scss'
import type { ContentWraperProps } from "./type";

function ContentWrapper({ children }: ContentWraperProps) {
    return <div className={style.sideWrapper}>
        <div className='flex'>
            {children}
        </div>
    </div>;
}

export default ContentWrapper;