import style from './MainContainer.module.scss'

type MainContainer = {
    title?: string;
    children?: React.ReactNode;
};

function MainContainer({ children, title }: MainContainer) {
    return (
        <div className={style.mainContainer}>
            <div className={style.title}>{title}</div>
            {children}
        </div>
    );
}

export default MainContainer;