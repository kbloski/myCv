
import style from './MyJourney.module.scss'

// @ts-ignore
import { Container, BulletList, BulletListItem } from "@shared/components"

import {
    Title
} from "../../templates";
import { useSelector } from 'react-redux';
import { getExperience, getEducation } from "../../../../entities/cv/model/selectors";

function MyJourney() {
    const educations = useSelector(getEducation);
    const experiences = useSelector(getExperience)

    return (
        <Container className={style.myJourney}>
            <div>
                {experiences.length && <>
                    <Title tag={4} >Experience</Title>
                    <BulletList title='Experience'>
                        {
                            experiences.map(experience =>
                                <BulletListItem title={experience.company} subtitle={experience.period ? experience.period.start + ` | ` + experience.period.end : undefined}>
                                    {experience.description}
                                </BulletListItem>
                            )
                        }
                    </BulletList>
                </>
                }
                {educations.length && <>
                    <Title tag={4}>Education</Title>
                    <BulletList title='Education'>
                        {
                            educations.map(education =>
                                <BulletListItem title={education.name} subtitle={education.years} />
                            )
                        }
                    </BulletList>
                </>
                }
            </div>
        </Container>
    );
}

export default MyJourney;