import style from './Education.module.scss'
import SidebarContainer from "./SidebarContainer";

type EducationProps = {
    education: { name: string, years: string}[]
}

function Education({ education} : EducationProps){
    return <SidebarContainer title="Education" mode="light">
        <ul className={style.educationList}>
            { education.map( edu =>
                <li className={style.educationItem}>
                    <div className={style.title}>{edu.name}</div>
                    <div>{edu.years}</div>
                </li>
            )}
        </ul>
    </SidebarContainer>
}

export default Education;