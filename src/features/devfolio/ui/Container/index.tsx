import style from './Container.module.scss'
import type { ContainerProps } from './types'

function Container({ children } : ContainerProps){
    return <div className={style.container}>
        { children }
    </div>
}

export default Container;