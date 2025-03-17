import style from "./PersonCard.module.scss";
import { MainContainer } from "../Main";

type PersonCardProps = {
    name: string;
    surname: string;
    position: string;
    description: React.ReactNode;
};

// @ts-ignore
function PersonCard({ name, surname, position, description }: PersonCardProps) {
    return (
        <MainContainer>
            <div className={style.personCard}>
                <div className={style.title}>{name}</div>
                <div className={style.title}>{surname}</div>
                <div className={style.subtitle}>{position}</div>
                <div className={style.description}>{description}</div>
            </div>
        </MainContainer>
    );
}

export default PersonCard;
