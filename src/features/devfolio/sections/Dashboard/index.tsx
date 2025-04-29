import style from "./Dashboard.module.scss";
import { 
    AboutMe,
    Navigation,
    PersonalCard
} from "../../organisms";

// @ts-ignore
import { Container } from "@shared/components";

function Dashboard() {
    return (
        <div className={style.profile}>
            <Navigation />
            <PersonalCard />
            <AboutMe />
        </div>
    );
}

export default Dashboard;
