import style from './Button.module.scss'
import { ButtonInterface } from "./type";

function Button({ children, onClick, className} : ButtonInterface){
    return <button onClick={onClick} className={style.button + ' ' + className}>{children}</button>
}

export default Button;