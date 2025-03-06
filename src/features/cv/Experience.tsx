import style from "./Experience.module.scss";
import ExperienceListItem from "./ExperienceListItem";
import ExperienceType from "./ExperienceType";
import MainContainer, { MainContainerContent } from "./ui/MainContent/MainContainer";
import Title from "./ui/Title";

type ExperienceProps = {
    experiences: ExperienceType[];
};

function Experience({ experiences }: ExperienceProps) {
    return (
        <MainContainer>
            <Title mode="underline-left">Experience</Title>
            <MainContainerContent>
                <ul className={style.experienceList}>
                    <li>
                        {experiences.map((experience) => (
                            <ExperienceListItem experience={experience} />
                        ))}
                    </li>
                </ul>
            </MainContainerContent>
        </MainContainer>
    );
}

export default Experience;
