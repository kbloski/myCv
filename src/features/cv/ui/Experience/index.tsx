import style from "./Experience.module.scss";
import ExperienceListItem from "./ExperienceListItem";
import type { ExperienceType } from "./types";
import MainContainer, { MainContainerContent } from "../Main/MainContainer";
import Title from "../Title";

type ExperienceProps = {
    experiences: ExperienceType[];
};

function Experience({ experiences }: ExperienceProps) {
    return (
        <MainContainer>
            <Title mode="underline-left">Experience</Title>
            <MainContainerContent>
                <ul className={style.experienceList}>
                    {experiences.map((experience, index) => (
                        <ExperienceListItem
                            experience={experience}
                            key={index}
                        />
                    ))}
                </ul>
            </MainContainerContent>
        </MainContainer>
    );
}

export default Experience;
