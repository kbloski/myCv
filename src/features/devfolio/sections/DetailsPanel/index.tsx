import style from "./Details.module.scss";
import { DetaislProps } from "./types";
import { MyJourney, Technologies } from "../../organisms";

function Details({} : DetaislProps) {
    return <div className={style.detailsPanel}>
        <div className={style.details}>
            <MyJourney />
            <Technologies />
        </div>
    </div>
}

export default Details;
