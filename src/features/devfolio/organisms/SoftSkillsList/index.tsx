import style from './SoftSkillsList.module.scss';

import { useSelector } from "react-redux";

import { Container } from "@shared/components";
import { getSoftSkills } from "../../../../entities/cv/model/selectors";

function SoftSkillsList()
{
    const skills = useSelector(getSoftSkills)


    if (!skills.length) return;

    return <Container className={style.container}>
        <ul className={style.softSkillsList}>
            {skills.map( s => <li key={s}>{s}</li> )}
        </ul>
    </Container>
}

export default SoftSkillsList;