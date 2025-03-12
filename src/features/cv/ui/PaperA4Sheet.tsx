import style from './PaperA4Sheet.module.scss'

interface PaperA4SheetProps {
    children?: React.ReactNode,
    id?: string
}
export default function PaperA4Sheet({ children, id } : PaperA4SheetProps) {
    return (
        <div className={style.sheetA4} id={id}>
            { children}
        </div>
    );
}