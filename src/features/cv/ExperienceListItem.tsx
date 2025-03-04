import type ExperienceType from "./ExperienceType"

type ExperienceListItemProps = {
    experience: ExperienceType
}

function ExperienceListItem({experience} : ExperienceListItemProps ){
    return <li>
        <div>{experience.company}</div>
        <div>Pozycja: {experience.position }</div>
        <div>{experience.address}</div>
        <div>{experience.description}</div>
    </li>
}

export default ExperienceListItem;