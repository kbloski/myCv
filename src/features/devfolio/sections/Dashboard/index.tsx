import style from "./Dashboard.module.scss";
import { 
    Navigation,
    PersonalCard
} from "../../organisms";

function Dashboard() {
    return (
        <div className={style.dashboard}>
            <div className={style.profile}>
                <Navigation />
                <PersonalCard />
            </div>
        </div>
    );
}

export default Dashboard;
