import style from './ContentContainer.module.scss'

type ContentContainerProps = { 
    title?: string;
    children?: React.ReactNode;
}

function ContentContainer({ children, title }: ContentContainerProps) {
    return <div className={style.contentContainer}>
        <div className={style.title}>{title}</div>
        {children}
    </div>;
}

export default ContentContainer;