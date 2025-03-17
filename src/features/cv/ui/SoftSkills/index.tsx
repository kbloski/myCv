import style from "./SoftSkillsList.module.scss";

import SoftSkillsListItem from "./SoftSkillsListItem";
import SidebarContainer, { SidebarContent } from "../Sidebar/SidebarContainer";
import Title from "../Title";

interface SoftSkillsProps {
    skills: string[];
}

function SoftSkills({ skills }: SoftSkillsProps) {
    if (!skills.length) return;

    return (
        <SidebarContainer>
            <Title color="accent" mode="underline-right" className="text-right">
                Soft skils
            </Title>
            <SidebarContent>
                <ul className={style.skillList}>
                    {skills.map((skill) => (
                        <SoftSkillsListItem skill={skill} />
                    ))}
                </ul>
            </SidebarContent>
        </SidebarContainer>
    );
}

export default SoftSkills;
