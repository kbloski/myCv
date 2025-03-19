import style from './Sidebar.module.scss'
import { SidebarProps } from './types';

function Sidebar({ children } : SidebarProps) {
    return (
        <div className={style.sidebar}>
            { children}
        </div>
    );
}

export default Sidebar;