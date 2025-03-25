import style from "./Details.module.scss";
import { DetaislProps } from "./types";

function Details({children} : DetaislProps) {
    return <div className={style.details}>
        {children}
    </div>;
}

export default Details;
