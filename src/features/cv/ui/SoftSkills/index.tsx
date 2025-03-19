import style from "./SoftSkillsList.module.scss";

import SoftSkillsListItem from "./SoftSkillsListItem";
import {SidebarContainer, SidebarContainerContent} from "../Sidebar";
import Title from "../Title";
import { SoftSkillsProps } from "./types";


function SoftSkills({ skills }: SoftSkillsProps) {
    if (!skills.length) return;

    return (
        <SidebarContainer>
            <Title color="accent" mode="underline-right" className="text-right">
                Soft skils
            </Title>
            <SidebarContainerContent>
                <ul className={style.skillList}>
                    {skills.map((skill) => (
                        <SoftSkillsListItem skill={skill} />
                    ))}
                </ul>
            </SidebarContainerContent>
        </SidebarContainer>
    );
}

export default SoftSkills;
