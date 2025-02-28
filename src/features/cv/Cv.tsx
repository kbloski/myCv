import { useSelector } from "react-redux";
import style from "./Cv.module.scss";
import { getCvData } from "./cvSlice";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Contact from "./Contact";
import Education from "./Education";
import TechnicalSkils from "./TechnicalSkills";
import PersonCard from "./PersonCard";

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
                <TechnicalSkils skills={cvData.technologies.familiar} />
            </Sidebar>
            <MainContent>
                <PersonCard 
                    name={cvData.name}
                    surname={cvData.surname}
                    address={cvData.address}
                    aboutMe={cvData.aboutMe}
                />

                <h1>{cvData.name}</h1>
                <h1>{cvData.surname}</h1>
                {/* <div className="w-80">{JSON.stringify(cvData)}</div> */}
            </MainContent>
        </div>
    );
}

export default Cv;
