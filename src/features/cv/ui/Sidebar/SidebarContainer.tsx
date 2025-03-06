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

interface SidebarContentProps  {
    children: React.ReactNode, 
}



function SidebarContent({children} : SidebarContentProps){
    return <div className={style.content}>
            {children}
    </div>
}

export { SidebarContent };
export default SidebarContainer;