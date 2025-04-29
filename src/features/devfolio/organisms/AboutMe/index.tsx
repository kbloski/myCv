
import style from './AboutMe.module.scss'
// @ts-ignore
import { Button, Container } from "@shared/components";
import {
    Title
} from "../../templates";
import { useSelector } from 'react-redux';
import { getHobbies, getLanguages, getSoftSkills } from '../../../../entities/cv/model/selectors';
import {MyJourney} from '../index';

function AboutMe(){
    const skills = useSelector(getSoftSkills)
    const hobbies = useSelector(getHobbies);
    const languages = useSelector(getLanguages)

    return (
        <Container className={style.aboutMe}>
            <Title tag={2}>
                <span>About </span>
                <span className="text-primary">Me</span>
            </Title>
            <MyJourney />
            {/* <div className="flex justify-around"> */}
                {/* {skills.length && (
                    <ul>
                        <Title tag={4} className="text-primary">
                            SoftSkills
                        </Title>
                        {skills.map((skill) => (
                            <li>{skill}</li>
                        ))}
                    </ul>
                )}
                {languages.length && (
                    <ul>
                        <Title tag={4} className="text-primary">
                            Languages
                        </Title>
                        {languages.map((language) => (
                            <li>
                                <span>{language.name}</span>{" "}
                                <span>{language.level}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {hobbies.length && (
                    <ul>
                        <Title tag={4} className="text-primary">
                            Hobbies
                        </Title>
                        {hobbies.map((hobby) => (
                            <li>{hobby}</li>
                        ))}
                    </ul>
                )} */}
            {/* </div> */}
        </Container>
    );
}

export default AboutMe;