import style from './PersonalCard.module.scss'
import {
    Title
} from '../../templates'
import { useDispatch, useSelector } from 'react-redux';

// @ts-ignore
import {  Container, Button} from '@shared/components';
    

import {
    getName,
    getProfession,
    getAboutMe,
}
    // @ts-ignore
    from "@entities/cv/model/selectors";
import { navigateTo } from '../../../../app/router';

function PersonalCard() {
    const dispatch = useDispatch();

    const name: string = useSelector(getName)
    const profession: string = useSelector(getProfession);
    const aboutMe: string = useSelector(getAboutMe);

    function onClickDownloadCv(){
        dispatch(navigateTo({path: "/cv"}));
    }

    return (
        <Container className={style.personalCard}>
            <img src="images/profile-left-transparent.png" alt='Profile picture' />
            <div className={style.personalDetails}>
                <div className={style.personalContent}>
                    <Title tag={1} className={style.gretting}>Cześć, jestem {name}</Title>
                    <Title tag={2} className={style.profession}> {profession} </Title>
                    <p className={style.aboutMe}>{aboutMe}</p>
                </div>
                <div>
                    <Button onClick={onClickDownloadCv}>Download Cv</Button>
                    <Button>Let's Talk</Button>
                </div>
            </div>
        </Container>
    );
}

export default PersonalCard;