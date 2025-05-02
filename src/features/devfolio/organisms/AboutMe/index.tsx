
import style from './AboutMe.module.scss'
// @ts-ignore
import { Button, Container } from "@shared/components";
import {
    Title
} from "../../templates";
import { Hobbies, Languages } from '../';

import { useSelector } from 'react-redux';
import { getHobbies, getLanguages, getSoftSkills } from '../../../../entities/cv/model/selectors';
import {MyJourney} from '../index';

function AboutMe(){
    const skills = useSelector(getSoftSkills)

    return (
        <Container className={style.aboutMe}>
            <Title tag={2} className={style.title}>
                <span>About </span>
                <span className="text-primary">Me</span>
            </Title>
            <div className={style.aboutFlex}>
                <Languages />
                <Hobbies />
            </div>
            <MyJourney />
        </Container>
    );
}

export default AboutMe;