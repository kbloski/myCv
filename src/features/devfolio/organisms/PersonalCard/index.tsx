import style from './PersonalCard.module.scss'
import {
    Title
} from '../../templates'
import { useSelector } from 'react-redux';

import {
    Container,
    Button
}
    // @ts-ignore
    from '@shared/components';

import {
    getName,
    getProfession,
    getAboutMe,
}
    // @ts-ignore
    from "@entities/cv/model/selectors";

function PersonalCard() {
    const name: string = useSelector(getName)
    const profession: string = useSelector(getProfession);
    const aboutMe: string = useSelector(getAboutMe);

    return (
        <Container className={style.personalCard}>
            <img src="images/profile-left-transparent.png" alt='Profile picture' />
            <div className={style.personalDetails}>
                <div className={style.personalContent}>
                    <Title tag={1} className={style.gretting}> - Cześć, jestem {name} - </Title>
                    <Title tag={3} className={style.profession}> {profession} </Title>
                    <p className={style.aboutMe}>{aboutMe}</p>
                </div>
                <div>
                    <Button>My Cv</Button>
                    <Button>Let's Talk</Button>
                </div>
            </div>
        </Container>
    );
}

export default PersonalCard;