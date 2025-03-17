import style from './ContactListItem.module.scss'

type ContactListItemProps = {
    title: string; 
    subtitle: string;
    icon: string;
}

function ContactListItem({ title, subtitle, icon} : ContactListItemProps){
    return (
        <li className={style.contactListItem}>
            <div>
                <div className={style.title}>{title}</div>
                <div className={style.subtitle}>{subtitle}</div>
            </div>
            <div className={style.iconBox}>
                <img src={icon} aria-hidden className={style.icon}/>
            </div>
        </li>
    )
}

export default ContactListItem;