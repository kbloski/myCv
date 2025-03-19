import style from './SidebarContainer.module.scss'
import { SidebarContainerProps } from './types';

function SidebarContainer({ children, mode} : SidebarContainerProps) {
    let classStr = mode === 'light' ? style.sidebarContainerLight : style.sidebarContainer 

    return (
        <div className={classStr}>
            {children}
        </div>
    );
}

export default SidebarContainer;