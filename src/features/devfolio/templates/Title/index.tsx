import style from './Title.module.scss'
import type { TitleProps } from './types';

function Title({ children, className, tag }: TitleProps) {
    if (tag === 1) return <h1 className={`${style.title} ${className}`}>{children}</h1>
    if (tag === 2) return <h2 className={`${style.title} ${className}`}>{children}</h2>
    if (tag === 3) return <h3 className={`${style.title} ${className}`}>{children}</h3>
    if (tag === 4) return <h4 className={`${style.title} ${className}`}>{children}</h4>
    if (tag === 5) return <h5 className={`${style.title} ${className}`}>{children}</h5>
    else return <h6 className={`${style.title} ${className}`}>{children}</h6>
    
}

export default Title;