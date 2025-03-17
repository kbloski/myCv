import style from "./TechnicalSkills.module.scss";
import SidebarContainer, { SidebarContent } from "../Sidebar/SidebarContainer";
import Title from "../Title";

type TechnicalSkillsProps = {
    skills: string[];
};

function TechnicalSkils({ skills }: TechnicalSkillsProps) {
    return (
        <SidebarContainer>
            <Title mode="underline-right" color="accent" className="text-end">
                Technical skils
            </Title>
            <SidebarContent>
                <ul className={style.skillsList}>
                    {skills.map((skill) => (
                        <li className={style.skillListItem} key={skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </SidebarContent>
        </SidebarContainer>
    );
}

export default TechnicalSkils;
