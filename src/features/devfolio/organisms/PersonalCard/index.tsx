import style from './PersonalCard.module.scss'
import {
    Container,
    Button
} from '../../templates'
import { useSelector } from 'react-redux';

import {
    getName,
    getProfession,
    getAboutMe,
// @ts-ignore
} from "@entities/cv/model/selectors";

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
                    <h1 className={style.gretting}>Cześć, jestem {name}</h1>
                    <h3 className={style.profession}>{profession}</h3>
                    <p className={style.aboutMe}>{aboutMe}</p>
                </div>
                <div>
                    <Button>Action</Button>
                    <Button>Action</Button>
                </div>
            </div>
        </Container>
    );
}

export default PersonalCard;