import style from './SidebarContainer.module.scss'

type SidebarContainerProps = {
    children?: React.ReactNode;
    mode?: 'light';
}

function SidebarContainer({ children, mode} : SidebarContainerProps) {
    return (
        <div className={mode === 'light' ? style.sidebarContainerLight : style.sidebarContainer}>
            <div className={style.content}>
                {children}
            </div>
        </div>
    );
}

export default SidebarContainer;