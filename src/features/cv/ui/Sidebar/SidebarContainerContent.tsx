import style from './SidebarContainerContent.module.scss'


interface SidebarContentProps  {
    children: React.ReactNode, 
}


function SidebarContent({children} : SidebarContentProps){
    return <div className={style.sidebarContainerContent}>{children}</div>;
}

export default SidebarContent;