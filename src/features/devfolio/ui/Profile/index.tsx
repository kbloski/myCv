import style from './Profile.module.scss'
import { ProfileProps } from './types';
import Navigation from '../Navigation';

function Profile({children} : ProfileProps){
    return <div className={style.profile}>
        <Navigation />
        { children}
    </div>;
}

export default Profile;