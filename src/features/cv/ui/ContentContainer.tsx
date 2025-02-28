import style from './ContentContainer.module.scss'

type ContentContainerProps = { children?: React.ReactNode }

function ContentContainer({ children }: ContentContainerProps) {
    return <div className={style.contentContainer}>{children}</div>;
}

export default ContentContainer;