
import style from './MyJourney.module.scss'
import {
    Container,
    TheTitle
} from "../../templates";
import { useSelector } from 'react-redux';
import { BulletList, BulletListItem } from '../../templates/BulletList';
import {
    getExperience,
    getEducation,
} from "../../../../entities/cv/model/selectors";

function MyJourney(){
    const educations = useSelector(getEducation);
    const experiences = useSelector(getExperience)

    return (
        <Container className={style.myJourney}>
            <TheTitle tag={2} className="text-center">
                <span>My </span>
                <span className="text-accent">Journey</span>
            </TheTitle>
            <div>
                { 
                    educations.length && <>
                        <BulletList title='Education'>
                            {
                                educations.map( education => 
                                    <BulletListItem title={education.name} subtitle={education.years} />
                                )
                            }
                        </BulletList>
                    </>
                }
                { 
                    experiences.length && <>
                        <BulletList title='Experience'>
                            {
                                experiences.map( experience => 
                                    <BulletListItem title={experience.company} subtitle={experience.period ?  experience.period.start  + ` | ` + experience.period.end : undefined }>
                                        {experience.description}
                                    </BulletListItem>
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