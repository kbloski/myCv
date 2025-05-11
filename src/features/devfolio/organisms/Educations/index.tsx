
import style from './Educations.module.scss'

import { Container, BulletList, BulletListItem } from "@shared/components"

import { useSelector } from 'react-redux';
import {  getEducation } from "../../../../entities/cv/model/selectors";

function MyJourney() {
    const educations = useSelector(getEducation);

    if (!educations.length) return;

    return (
        <Container className={style.myJourney}>
            <BulletList>
                {
                    educations.map((education, i) =>
                        <BulletListItem key={i} title={education.name} subtitle={education.years} />
                    )
                }
            </BulletList>
        </Container>
    );
}

export default MyJourney;