import style from './PaperA4Sheet.module.scss'

export default function PaperA4Sheet({ children } : { children?: React.ReactNode }) {
    return (
        <div className={style.sheetA4}>
            { children}
        </div>
    );
}