import style from './SidebarContainer.module.scss'

type SidebarContainerProps = {
    children?: React.ReactNode;
    mode?: 'light';
    className?: string;
}

function SidebarContainer({ children, mode} : SidebarContainerProps) {
    let classStr = mode === 'light' ? style.sidebarContainerLight : style.sidebarContainer 

    return (
        <div className={classStr}>
            {children}
        </div>
    );
}

export default SidebarContainer;