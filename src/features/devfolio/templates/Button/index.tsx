import style from './Button.module.scss'
import { ButtonProps } from "./type";

function Button({ children, onClick, className} : ButtonProps){
    return <button onClick={onClick} className={style.btn + ' ' + className}>{children}</button>
}

export default Button;