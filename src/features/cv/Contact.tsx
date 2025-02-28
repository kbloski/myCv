import ContactListItem from "./ContactListItem";
import style from "./Contact.module.scss";
import SidebarContainer from "./ui/SidebarContainer";

type ContactProps = {
    phone?: string;
    email?: string;
    websites?: string[];
    address?: string;
};

function Contact({ phone, email, websites, address }: ContactProps) {
    return (
        <SidebarContainer title="Contact">
            <ul className={style.contactList}>
                {phone && (
                    <ContactListItem
                        title="phone"
                        subtitle={phone}
                        icon="/myCv/icons/phone.png"
                    />
                )}
                {email && (
                    <ContactListItem
                        title="email"
                        subtitle={email}
                        icon="/myCv/icons/mail.png"
                    />
                )}
                {websites?.length &&
                    websites.map((webiste) => (
                        <ContactListItem
                            title="website"
                            subtitle={webiste}
                            icon="/myCv/icons/web.png"
                        />
                    ))}
                {address && (
                    <ContactListItem
                        title="address"
                        subtitle={address}
                        icon="/myCv/icons/home.png"
                    />
                )}
            </ul>
        </SidebarContainer>
    );
}

export default Contact;
