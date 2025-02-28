import { useSelector } from "react-redux";
import style from "./Cv.module.scss";
import { getCvData } from "./cvSlice";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Contact from "./Contact";
import SidebarContainer from "./SidebarContainer";
import Education from "./Education";

function Cv() {
    const cvData = useSelector(getCvData);

    

    return (
        <div className={style.a4sheet + " flex"}>
            <Sidebar>
                <div className={style.profileContainer}>
                    <img
                        src="/myCv/images/profile.png"
                        alt="Profile"
                        className={style.profile}
                    />
                </div>
                <Contact
                    phone={cvData.contact.phone}
                    email={cvData.contact.email}
                    websites={cvData.contact.websites}
                    address={cvData.address}
                />
                <Education education={cvData.education} />
            </Sidebar>
            <MainContent>
                <div className="w-80">{JSON.stringify(cvData)}</div>
            </MainContent>
        </div>
    );
}

export default Cv;
