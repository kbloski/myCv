import style from './ExperienceListItem.module.scss'
import type ExperienceType from "./ExperienceType"

type ExperienceListItemProps = {
    experience: ExperienceType
}

function ExperienceListItem({experience} : ExperienceListItemProps ){
    return (
        <li className={style.listItem}>
            <div className={style.companyName}>{experience.company}</div>
            <div>Pozycja: {experience.position}</div>
            <div>{experience.address}</div>
            <div>{experience.description}</div>
        </li>
    );
}

export default ExperienceListItem;