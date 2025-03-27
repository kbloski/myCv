import style from './Container.module.scss'
import type { ContainerProps } from './types'

function Container({ children, className } : ContainerProps){
    return <div className={style.container + ' ' + className}>  
        { children }
    </div>
}

export default Container;