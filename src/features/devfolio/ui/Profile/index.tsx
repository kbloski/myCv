import style from './Profile.module.scss'
import { ProfileProps } from './types';

function Profile({children} : ProfileProps){
    return <div className={style.profile}>
        { children}
    </div>;
}

export default Profile;