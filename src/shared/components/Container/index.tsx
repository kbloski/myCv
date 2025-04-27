import styles from './Container.module.scss'
import { ContainerInterface } from "./types";

function Container({ children, className } : ContainerInterface)
{
    return <div className={`${styles.container} ${className}`}>
        { children }
    </div>
}

export default Container;