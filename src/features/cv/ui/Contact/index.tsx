import ContactListItem from "./ContactListItem";
import style from "./Contact.module.scss";
import Title from "../Title";
import SidebarContainer, { SidebarContent } from "../Sidebar/SidebarContainer";

type ContactProps = {
    phone?: string;
    email?: string;
    websites?: string[];
    address?: string;
};

function Contact({ phone, email, websites, address }: ContactProps) {
    return (
        <SidebarContainer>
            <Title mode="underline-right" color="accent" className="text-end">
                Contact
            </Title>
            <SidebarContent>
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
                                key={webiste}
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
            </SidebarContent>
        </SidebarContainer>
    );
}

export default Contact;
