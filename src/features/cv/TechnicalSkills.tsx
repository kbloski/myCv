import style from "./TechnicalSkills.module.scss";
import SidebarContainer from "./ui/SidebarContainer";

type TechnicalSkillsProps = {
    skills: string[];
};

function TechnicalSkils({ skills }: TechnicalSkillsProps) {
    return (
        <SidebarContainer title="Technical Skills">
            <ul className={style.skillsList}>
                {skills.map((skill) => (
                    <li className={style.skillListItem}>{skill}</li>
                ))}
            </ul>
        </SidebarContainer>
    );
}

export default TechnicalSkils;
