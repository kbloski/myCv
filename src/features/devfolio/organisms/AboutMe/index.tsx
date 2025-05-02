
import style from './AboutMe.module.scss'
// @ts-ignore
import { Button, Container } from "@shared/components";
import {
    Title
} from "../../templates";
import { Hobbies, Languages, SoftSkills } from '../';

import {MyJourney} from '../index';

function AboutMe(){

    return (
        <Container className={style.aboutMe}>
            <Title tag={2} className={style.title}>
                <span>About </span>
                <span className="text-primary">Me</span>
            </Title>
            <div className={style.aboutFlex}>
                <Languages />
                <Hobbies />
                <SoftSkills />
            </div>
            <MyJourney />
        </Container>
    );
}

export default AboutMe;