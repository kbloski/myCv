import style from "./MainContent.module.scss";

interface MainContent {
    children?: React.ReactNode;
}
function MainContent({ children }: MainContent) {
    return <div className={style.mainContent}>{children}</div>;
}

export default MainContent;
