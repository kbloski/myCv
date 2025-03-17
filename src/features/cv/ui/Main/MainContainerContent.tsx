import style from './MainContainerContent.module.scss'

interface MainContainerContentProps {
    children: React.ReactNode,
}
function MainContainerContent({children} : MainContainerContentProps){
    return <div className={style.mainContainerContent}>
        { children }
    </div>
}

export default MainContainerContent