import style from './SoftSkills.module.scss';

import { useSelector } from "react-redux";

// @ts-ignore
import { Container } from "@shared/components";
import { Title } from "../../templates";
import { getSoftSkills } from "../../../../entities/cv/model/selectors";

function SoftSkills()
{
    const skills = useSelector(getSoftSkills)


    if (!skills.length) return;

    return <Container className={style.container}>
        <Title tag={4} className={style.title}>Skills</Title>
        <ul className={style.softSkillsList}>
            {skills.map( s => <li key={s}>{s}</li> )}
        </ul>
    </Container>
}

export default SoftSkills;