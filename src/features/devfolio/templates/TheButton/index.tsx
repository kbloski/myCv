import style from './TheButton.module.scss'
import { TheButtonProps } from "./type";

function TheButton({ children, onClick, className} : TheButtonProps){
    return <button onClick={onClick} className={style.btn + ' ' + className}>{children}</button>
}

export default TheButton;