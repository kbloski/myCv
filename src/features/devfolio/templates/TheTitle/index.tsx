import style from './TheTitle.module.scss'
import type { TheTitleProps } from './types';

function TheTitle({ children, className, tag }: TheTitleProps) {
   const classes =  style.title + ' ' + className;

    if (tag === 1) return <h1 className={classes}>{children}</h1>
    if (tag === 2) return <h2 className={classes}>{children}</h2>
    if (tag === 3) return <h3 className={classes}>{children}</h3>
    if (tag === 4) return <h4 className={classes}>{children}</h4>
    if (tag === 5) return <h5 className={classes}>{children}</h5>
    else return <h6 className={classes}>{children}</h6>
    
}

export default TheTitle;