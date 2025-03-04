import style from "./TechnicalSkills.module.scss";
import SidebarContainer from "./ui/SidebarContainer";
import Title from "./ui/Title";

type TechnicalSkillsProps = {
    skills: string[];
};

function TechnicalSkils({ skills }: TechnicalSkillsProps) {
    return (
        <SidebarContainer>
            <Title mode="underline-right" color="accent">Technical skils</Title>
            <ul className={style.skillsList}>
                {skills.map((skill) => (
                    <li className={style.skillListItem}>{skill}</li>
                ))}
            </ul>
        </SidebarContainer>
    );
}

export default TechnicalSkils;
