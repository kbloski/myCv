import style from './Wrapper.module.scss'
import type { WrapperInterface } from "./type";

function Wrapper( { children }: WrapperInterface ) 
{
    return (
        <div id="_wrapper" className={style.sideWrapper}>
            {children}
        </div>
    );
}

export default Wrapper;