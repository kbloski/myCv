
import style from './AboutMe.module.scss'
// @ts-ignore
import { Button, Container, SwiperScrollContainer } from "@shared/components";
import {
    Title
} from "../../templates";
import { HobbiesList, Languages, SoftSkillsList ,ExperiencesList , Educations } from '../../organisms';


function AboutMe(){

    return (
        <Container className={style.aboutMe}>
            <Title tag={3} className={style.title}>Języki</Title>
            <Languages />
            <Title tag={3} className={style.title}>O mnie</Title>
            <div className={style.aboutFlex}>
                <div>
                    <Container>
                        <Title tag={4}>Umiejętności Miękkie</Title>
                        <SwiperScrollContainer className={style.aboutMeItem}>
                            <SoftSkillsList />
                        </SwiperScrollContainer>
                    </Container>
                </div>
                <div>
                    <Container>
                        <Title tag={4}>Pasje</Title>
                        <SwiperScrollContainer className={style.aboutMeItem}>
                            <HobbiesList />
                        </SwiperScrollContainer>
                    </Container>
                </div>
                <div>
                    <Container>
                        <Title tag={4}>Doświadczenie</Title>
                        <SwiperScrollContainer className={style.aboutMeItem}>
                            <ExperiencesList />
                        </SwiperScrollContainer>
                    </Container>
                </div>
            </div>
            <Title tag={3} className={style.title}>Edukacja</Title>
            <Educations />
        </Container>
    );
}

export default AboutMe;