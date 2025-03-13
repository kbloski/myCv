import style from './PaperA4Sheet.module.scss'

interface PaperA4SheetProps {
    children?: React.ReactNode,
    id?: string,
    className?: string
}
export default function PaperA4Sheet({ children, id, className } : PaperA4SheetProps) {
    return (
        <div className={`${className} ${style.sheetA4}`} id={id}>
            { children}
        </div>
    );
}