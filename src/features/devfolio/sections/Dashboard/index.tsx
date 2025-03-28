import style from "./Dashboard.module.scss";
import { 
    AboutMe,
    Navigation,
    PersonalCard
} from "../../organisms";

function Dashboard() {
    return (
        <div className={style.dashboard}>
            <div className={style.profile}>
                <Navigation />
                <PersonalCard />
                <AboutMe />
            </div>
        </div>
    );
}

export default Dashboard;
