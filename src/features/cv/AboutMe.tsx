import style from './AboutMe.module.scss';

function AboutMe({ description }: { description: string }) {
    return <div className={style.aboutMe}>{description}</div>
}

export default AboutMe;