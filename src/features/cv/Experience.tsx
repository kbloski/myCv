import style from "./Experience.module.scss";
import ExperienceListItem from "./ExperienceListItem";
import ExperienceType from "./ExperienceType";
import Title from "./ui/Title";

type ExperienceProps = {
    experiences: ExperienceType[];
};

function Experience({ experiences }: ExperienceProps) {
    return (
        <div>
            <Title mode="underline-left">Experience</Title>
            <ul className={style.experienceList}>
                <li>
                    {experiences.map((experience) => (
                        <ExperienceListItem experience={experience} />
                    ))}
                </li>
            </ul>
        </div>
    );
}

export default Experience;
