
import style from './AboutMe.module.scss'
import {
    Container,
    TheButton,
    TheTitle
} from "../../templates";
import { useSelector } from 'react-redux';
import { getAboutMe, getHobbies, getLanguages, getSoftSkills } from '../../../../entities/cv/model/selectors';

function AboutMe(){
    const aboutMe = useSelector(getAboutMe)
    const hobbies = useSelector(getHobbies);
    const languages = useSelector(getLanguages)
    const skills = useSelector(getSoftSkills)

    return (
        <Container className={style.aboutMe}>
            <TheTitle tag={2} className="text-center">
                <span>About </span>
                <span className="text-primary">Me</span>
            </TheTitle>
            <div className={style.aboutPicture}>
                <div className={style.pictureContainer}>
                    <img src="images/profile-without-background-mirror.png" />
                </div>
            </div>
            <p className={style.description}>{aboutMe}</p>
            <div className="flex justify-around">
                {skills.length && (
                    <ul>
                        <TheTitle tag={4} className="text-primary">
                            SoftSkills
                        </TheTitle>
                        {skills.map((skill) => (
                            <li>{skill}</li>
                        ))}
                    </ul>
                )}
                {languages.length && (
                    <ul>
                        <TheTitle tag={4} className="text-primary">
                            Languages
                        </TheTitle>
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
                        <TheTitle tag={4} className="text-primary">
                            Hobbies
                        </TheTitle>
                        {hobbies.map((hobby) => (
                            <li>{hobby}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="flex justify-center">
                <TheButton>More about me</TheButton>
            </div>
        </Container>
    );
}

export default AboutMe;