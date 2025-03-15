import style from './ExperienceListItem.module.scss'
import type ExperienceType from "./ExperienceType"

type ExperienceListItemProps = {
    experience: ExperienceType
}

function ExperienceListItem({experience} : ExperienceListItemProps ){
    return (
        <li className={style.listItem}>
            <div className={style.listItemHeader}>
                <div>
                    <div className={style.companyName}>
                        {experience.company}
                    </div>
                    <hr></hr>
                    <div>
                        <div>Job position / {experience.position}</div>
                        {experience.period && (
                            <div>
                                {experience.period.start} /{" "}
                                {experience.period.end}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={style.listItemBody}>
                <div>
                    <div className={style.experienceDescription}>
                        {experience.description}
                    </div>
                    {experience.skils && (
                        <div>
                            <ul className={style.experienceSkillList}>
                                {experience.skils.map((skill) => (
                                    <li> {skill}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
}

export default ExperienceListItem;