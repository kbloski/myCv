import style from "./TechnicalSkills.module.scss";
import SidebarContainer, {
    SidebarContent,
} from "./ui/Sidebar/SidebarContainer";
import Title from "./ui/Title";

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
                        <li className={style.skillListItem}>{skill}</li>
                    ))}
                </ul>
            </SidebarContent>
        </SidebarContainer>
    );
}

export default TechnicalSkils;
