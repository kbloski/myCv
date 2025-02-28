import style from './MainContent.module.scss'

function MainContent({ children }: { children?: React.ReactNode }) {
    return <div className={style.mainContent}>
        { children}
    </div>
}

export default MainContent;