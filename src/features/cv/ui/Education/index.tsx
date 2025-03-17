import style from "./Education.module.scss";
import {SidebarContainer, SidebarContainerContent} from "../Sidebar";
import Title from "../Title";

type EducationProps = {
    education: { name: string; years: string }[];
};

function Education({ education }: EducationProps) {
    return (
        <SidebarContainer mode="light">
            <div className={style.titleLabel}>
                <Title mode="underline-right" className={`text-right`}>
                    Education
                </Title>
            </div>
            <SidebarContainerContent>
                <ul className={style.educationList}>
                    {education.map((edu) => (
                        <li className={style.educationListItem} key={edu.name}>
                            <div className={style.listItemTitle}>
                                {edu.name}
                            </div>
                            <div>{edu.years}</div>
                        </li>
                    ))}
                </ul>
            </SidebarContainerContent>
        </SidebarContainer>
    );
}

export default Education;
