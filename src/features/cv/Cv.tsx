import { useSelector } from "react-redux";
import style from "./Cv.module.scss";
import { getCvData } from "./cvSlice";
import Sidebar from "./ui/Sidebar";
import MainContent from "./ui/MainContent";
import Contact from "./Contact";
import Education from "./Education";
import TechnicalSkils from "./TechnicalSkills";
import PersonCard from "./PersonCard";
import PaperA4Sheet from "./ui/PaperA4Sheet";
import ContentContainer from "./ui/ContentContainer";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import SidebarContainer from "./ui/SidebarContainer";

function Cv() {
    const cvData = useSelector(getCvData);

    return (
        <>
            <PaperA4Sheet>
                <Sidebar>
                    <div className={style.profileContainer}>
                        <img
                            src="/myCv/images/profile.png"
                            alt="Profile"
                            className={style.profile}
                            />
                    </div>
                    <SidebarContainer>
                        <Contact
                            phone={cvData.contact.phone}
                            email={cvData.contact.email}
                            websites={cvData.contact.websites}
                            address={cvData.address}
                        />
                    </SidebarContainer>
                    <Education education={cvData.education} />
                    <TechnicalSkils skills={cvData.technologies.familiar} />
                </Sidebar>
                <MainContent>
                    <ContentContainer>
                        <PersonCard
                            name={cvData.name}
                            surname={cvData.surname}
                            position={cvData.profession}
                            description={`Portfolio: https://kbloski.github.io/myCv/`}
                        />
                    </ContentContainer>
                    <AboutMe description={cvData.aboutMe}/>
                    <ContentContainer>
                        <Experience experiences={cvData.experience} />
                    </ContentContainer>


                    {/* <div className="w-80">{JSON.stringify(cvData)}</div> */}
                </MainContent>
            </PaperA4Sheet>
        </>
    );
}

export default Cv;
