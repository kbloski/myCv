import { TitleProps } from "./types";

function Title({
    children,
    className,
    level,
} : TitleProps){
    const fullClassName = `title- ${className}`;

    if (level === 1) return <h1 className={fullClassName}>{children}</h1>
    if (level === 2) return <h2 className={fullClassName}>{children}</h2>
    if (level === 3) return <h3 className={fullClassName}>{children}</h3>
    if (level === 4) return <h4 className={fullClassName}>{children}</h4>
    if (level === 5) return <h5 className={fullClassName}>{children}</h5>
    else return <h6 className={fullClassName}>{children}</h6>
}