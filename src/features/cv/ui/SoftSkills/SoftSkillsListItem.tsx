import style from './SoftSkillsListItem.module.scss'

interface SoftSkillsListItemProps {
    skill: string
}

function SoftSkillsListItem({skill} : SoftSkillsListItemProps){
    return <li className={style.listItem}>
        {skill}
    </li>
}

export default SoftSkillsListItem;