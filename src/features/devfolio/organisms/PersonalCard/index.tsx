import style from './PersonalCard.module.scss'
import {
    Container,
    TheButton,
    TheTitle
} from '../../templates'
import { useSelector } from 'react-redux';

import {
    getName,
    getProfession,
    getAboutMe,
} from "../../../../entities/cv/model/selectors";

function PersonalCard(){
    const name : string = useSelector(getName)
    const profession: string = useSelector(getProfession);
    const aboutMe: string = useSelector(getAboutMe);

    return (
        <Container>
            <div className={style.personalCard}>
                <div className={style.personalImg}>
                    <img src="images/profile-without-background-mirror.png" />
                </div>
                <div className={style.personalCardContent}>
                    <TheTitle tag={1} className={style.gretting}>
                        Cześć, jestem {name}
                    </TheTitle>
                    <TheTitle tag={3} className={style.profession}
                    >
                        {profession}
                    </TheTitle>
                    <p className={style.aboutMe}>{aboutMe}</p>
                </div>
                <div className={style.actions}>
                    <TheButton>My Cv</TheButton>
                    <TheButton>Let's Talk</TheButton>
                </div>
            </div>
        </Container>
    );
}

export default PersonalCard;