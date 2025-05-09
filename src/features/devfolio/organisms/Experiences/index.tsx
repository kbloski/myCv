// @ts-ignore
import style from './Experiences.module.scss'

// @ts-ignore
import { Container, BulletList, BulletListItem } from "@shared/components"

import {
    Title
} from "../../templates";
import { useSelector } from 'react-redux';
import { getExperience } from "../../../../entities/cv/model/selectors";

function MyJourney() {
    const experiences = useSelector(getExperience)

    if (!experiences.length) return;

    return (
        <Container>
            <Title tag={4} >Experience</Title>
            <BulletList>
                {
                    experiences.map((experience, i) =>
                        <BulletListItem key={i} title={experience.company} subtitle={experience.period ? experience.period.start + ` | ` + experience.period.end : undefined}>
                            {experience.description}
                        </BulletListItem>
                    )
                }
            </BulletList>
        </Container>
    );
}

export default MyJourney;