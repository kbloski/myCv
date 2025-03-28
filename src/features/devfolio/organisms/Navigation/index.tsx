import style from "./Navigation.module.scss";

import { useSelector } from "react-redux";

// @ts-ignore
import { getName } from "@entities/cv/model/selectors";
import { Container, TheTitle} from "../../templates";

function Navigation() {
    const name = useSelector(getName) ;
    const links: { name: string; onClick?: React.MouseEventHandler }[] = [
        { name: "Home", onClick: () => console.log("Home") },
        { name: "About", onClick: () => console.log("About") },
        { name: "Technologies", onClick: () => console.log("About") },
        { name: "Education", onClick: () => console.log("Education") },
        { name: "Skils", onClick: () => console.log("Skils") },
        { name: "Contact", onClick: () => console.log("Contact") },
    ];

    return (
        <>
            <Container>
                <nav className={style.navbar}>
                    <TheTitle tag={2} className={style.banerTitle}>
                        {name}.
                    </TheTitle>
                    <ul className={style.navList}>
                        {links.map((link) => (
                            <li
                                key={link.name}
                                onClick={link.onClick}
                                className={style.navItem}
                            >
                                {link.name}
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </>
    );
}

export default Navigation;
