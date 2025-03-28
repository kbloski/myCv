
import style from './AboutMe.module.scss'
import {
    Container,
    TheButton,
    TheTitle
} from "../../templates";
import { useSelector } from 'react-redux';
// @ts-ignore
import { getAboutMe } from '@entities/cv/model/selectors';

function AboutMe(){
    const aboutMe : string = useSelector(getAboutMe)

    return (
        <Container className={style.aboutMe}>
            <TheTitle tag={2} className='text-center'>
                <span>About </span>
                <span className='text-accent'>Me</span>
            </TheTitle>
            <div className={style.aboutPicture}>
                <div className={style.pictureContainer}>
                    <img src='images/profile-without-background-mirror.png' />
                </div>
            </div>
            <p className='text-center'>{aboutMe}</p>
            <div className='flex justify-center'>
                <TheButton>More about me</TheButton>
            </div>
        </Container>
    );
}

export default AboutMe;