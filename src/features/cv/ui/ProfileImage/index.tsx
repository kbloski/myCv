import style from './ProfileImage.module.scss'
import { ProfileImageProps } from './types';

function ProfileImage({ src } : ProfileImageProps){
    return <div className={style.profileContainer}>
        <img src={src} alt="Prifile picture" />
    </div>
}

export default ProfileImage;