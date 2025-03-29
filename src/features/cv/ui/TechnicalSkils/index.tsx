import style from "./TechnicalSkills.module.scss";
import {SidebarContainer, SidebarContainerContent} from "../Sidebar";
import Title from "../Title";
import { TechnicalSkillsProps } from "./types";

function TechnicalSkils({ skills }: TechnicalSkillsProps) {
    return (
        <SidebarContainer>
            <Title mode="underline-right" color="accent" className="text-end">
                Technical skils
            </Title>
            <SidebarContainerContent>
                <ul className={style.skillsList}>
                    {skills.map((skill) => (
                        <li className={style.skillListItem} key={skill.name}>
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </SidebarContainerContent>
        </SidebarContainer>
    );
}

export default TechnicalSkils;
