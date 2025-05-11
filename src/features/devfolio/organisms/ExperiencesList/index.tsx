import { Container, BulletList, BulletListItem } from "@shared/components"

import { useSelector } from 'react-redux';
import { getExperience } from "@entities/cv/model/selectors";

function ExperiencesList() {
    const experiences = useSelector(getExperience)

    if (!experiences.length) return;

    return (
        <Container>
            <BulletList>
                {
                    experiences.map((experience, i) =>
                        <BulletListItem key={i} title={experience.company} subtitle={experience.period ? experience.period.start + ` | ` + experience.period.end : undefined}>
                            {experience.description}
                            <ul>
                                { experience.skils?.map(ex => <li>
                                    {ex}
                                </li>)}
                            </ul>
                        </BulletListItem>
                    )
                }
            </BulletList>
        </Container>
    );
}

export default ExperiencesList;