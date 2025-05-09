import style from './style/index.module.scss';

interface AboutMeProps { 
    description: string
}

function AboutMe({ description }: AboutMeProps ) {
    return <div className={style.aboutMe}>{description}</div>
}

export default AboutMe;