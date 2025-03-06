import { useSelector } from "react-redux";
import style from "./Cv.module.scss";
import { getCvData } from "./cvSlice";
import Sidebar from "./ui/Sidebar/Sidebar";
import MainContent  from "./ui/MainContent/MainContent";
import Contact from "./Contact";
import Education from "./Education";
import TechnicalSkils from "./TechnicalSkills";
import PersonCard from "./PersonCard";
import PaperA4Sheet from "./ui/PaperA4Sheet";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Clauses from "./Clauses";

function Cv() {
    const cvData = useSelector(getCvData);
    
    const userWebsitesList = cvData.contact.websites.map( data => data.url)
    const githubUrl = cvData.contact.websites.find( website => website.name === 'GitHub')?.url;

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
                    <Contact
                        phone={cvData.contact.phone}
                        email={cvData.contact.email}
                        websites={userWebsitesList}
                        address={cvData.address}
                    />
                    <Education education={cvData.education} />
                    <TechnicalSkils skills={cvData.technologies.familiar} />
                </Sidebar>
                <MainContent>
                    <PersonCard
                        name={cvData.name}
                        surname={cvData.surname}
                        position={cvData.profession}
                        description={
                            <a 
                                href={githubUrl}
                                target="_blank"
                            >
                                Portfolio: https://kbloski.github.io/myCv/
                            </a>
                        }
                    />
                    <AboutMe description={cvData.aboutMe} />
                    <Experience experiences={cvData.experience} />

                    {/* <div className="w-80">{JSON.stringify(cvData)}</div> */}
                    <Clauses />
                </MainContent>
            </PaperA4Sheet>
        </>
    );
}

export default Cv;
