import style from './ProfileImage.module.scss'

interface ProfileImageProps {
    src: string
}

function ProfileImage({ src } : ProfileImageProps){
    return <div className={style.profileContainer}>
        <img src={src} alt="Prifile picture" />
    </div>
}

export default ProfileImage;