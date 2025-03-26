import style from './Profile.module.scss'
import { ProfileProps } from './types';
import Navigation from '../Navigation';

function Profile({} : ProfileProps){
    return <div className={style.profile}>
        <Navigation />
    </div>;
}

export default Profile; 