
import style from './AboutMe.module.scss'
// @ts-ignore
import { Button, Container } from "@shared/components";
import {
    Title
} from "../../templates";
import { Hobbies, Languages, SoftSkills,Experiences, Educations } from '../../organisms';


function AboutMe(){

    return (
        <Container className={style.aboutMe}>
            <Title tag={3} className={style.title}>Języki</Title>
            <Languages />
            <Title tag={3} className={style.title}>O mnie</Title>
            <div className={style.aboutFlex}>
                <div>
                    <Container>
                        <SoftSkills />
                    </Container>
                </div>
                <div>
                    <Container>
                        <Hobbies />
                    </Container>
                </div>
                <div>
                    <Container>
                        <Experiences />
                    </Container>
                </div>
            </div>
            <Title tag={3} className={style.title}>Education</Title>
            <Educations />
        </Container>
    );
}

export default AboutMe;