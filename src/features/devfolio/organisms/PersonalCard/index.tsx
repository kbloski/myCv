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
// @ts-ignore
} from "../../../../entities/cv/model/selectors";
import { Link } from 'react-router-dom';

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
                    <Link to={{ pathname: '/myCv' }}>
                        <TheButton>My Cv</TheButton>
                    </Link>
                    <TheButton>Let's Talk</TheButton>
                </div>
                {/* <div>
                    <span className='pi pi-cloud' />
                </div> */}
            </div>
        </Container>
    );
}

export default PersonalCard;