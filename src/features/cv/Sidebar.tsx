import style from './Sidebar.module.scss'

function Sidebar({ children } : { children?: React.ReactNode }) {
    return (
        <div className={style.sidebar}>
            { children}
        </div>
    );
}

export default Sidebar;