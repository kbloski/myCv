import style from './PersonCard.module.scss'

type PersonCardProps = {
    name: string;
    surname: string;
    position: string;
    description: string;
}

function PersonCard({name, surname, position, description} : PersonCardProps){
    return (
        <div className={style.personCard}>
            <div className={style.title}>{name}</div>
            <div className={style.title}>{surname}</div>
            <div className={style.subtitle}>{position}</div>
            <div className={style.description}>{description}</div>
        </div>
    )
}

export default PersonCard;