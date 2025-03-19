import style from './Title.module.scss'
import { TitleProps } from './types'


function Title({
    children, 
    color = 'basic', 
    mode = 'normal',
    className,
} : TitleProps){
    let classes = style.title

    // Colors
    if (color === 'basic'){
        classes += ' '+style['title-color-basic'] 
    }
    else if (color === 'accent') {
        classes += ' '+style['title-color-accent'] 
    }
    
    // Mode 
    if (mode === 'underline'){
        classes += ` ${style['title-underline']}`
    } else if (mode === 'underline-left'){
        classes += ` ${style['title-underline']} ${style["title-underline-left"]}`;
    } else if ( mode === 'underline-right'){
        classes += ` ${style['title-underline']} ${style["title-underline-right"]}`;
    }


    return <div className={`${classes} ${className}`}>
        {children}
    </div>
}

export default Title;