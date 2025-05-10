
import style from './AboutMe.module.scss'
// @ts-ignore
import { Button, Container, SwiperScrollContainer } from "@shared/components";
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
                        <SwiperScrollContainer className={style.aboutMeItem}>
                            <SoftSkills />
                        </SwiperScrollContainer>
                    </Container>
                </div>
                <div>
                    <Container>
                        <SwiperScrollContainer className={style.aboutMeItem}>
                            <Hobbies />
                        </SwiperScrollContainer>
                    </Container>
                </div>
                <div>
                    <Container>
                        <SwiperScrollContainer className={style.aboutMeItem}>
                            <Experiences />
                        </SwiperScrollContainer>
                    </Container>
                </div>
            </div>
            <Title tag={3} className={style.title}>Education</Title>
            <Educations />
        </Container>
    );
}

export default AboutMe;