import style from './SidebarContainerContent.module.scss'
import { SidebarContainerContentProps } from './types';

function SidebarContainerContent({ children }: SidebarContainerContentProps) {
    return <div className={style.sidebarContainerContent}>{children}</div>;
}

export default SidebarContainerContent;