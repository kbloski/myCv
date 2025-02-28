import style from './SidebarContainer.module.scss'

type SidebarContainerProps = {
    children?: React.ReactNode;
    title: string,
    mode?: 'light';
}

function SidebarContainer({ children, title, mode} : SidebarContainerProps) {
    return (
        <div className={mode === 'light' ? style.sidebarContainerLight : style.sidebarContainer}>
            <h2 className={style.title}>{title}</h2>
            <div className={style.content}>
                {children}
            </div>
        </div>
    );
}

export default SidebarContainer;