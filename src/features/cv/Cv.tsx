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
import { generatePDFandSave } from "../../utils/generatePDF";
import Background from "./ui/Background";
import ProfileImage from "./ProfileImage";
import SoftSkills from "./SoftSkillsList";

function Cv() {
    const cvData = useSelector(getCvData);
    
    const userWebsitesList = cvData.contact.websites.map( data => data.url)
    const cvGithubUrl = 'https://kbloski.github.io/myCv/';
    
    function handleGeneratePdf(){
        const cvElement = document.getElementById('cv');
        if (!cvElement) throw new Error("Don't find html element for generate cv.");


        generatePDFandSave({
            elementHtml: cvElement,
            filename: 'kamil_błoński_cv'
        })
    }

    return (
        <>
            <Background />
            <div className={style.btnContainer}>
                <button
                    onClick={handleGeneratePdf}
                    className={style.btnDownload}
                >
                    Download CV
                </button>
            </div>
            <div>
                <PaperA4Sheet id="cv" className={style.cv}>
                    <Sidebar>
                        <ProfileImage src="/myCv/images/profile.png" />
                        <Contact
                            phone={cvData.contact.phone}
                            email={cvData.contact.email}
                            websites={userWebsitesList}
                            address={cvData.address}
                        />
                        <Education education={cvData.education} />
                        <TechnicalSkils skills={cvData.skills.programming.familiar} />
                        <SoftSkills skills={cvData.skills.soft}/>
                    </Sidebar>
                    <MainContent>
                        <PersonCard
                            name={cvData.name}
                            surname={cvData.surname}
                            position={cvData.profession}
                            description={<>Portfolio: {cvGithubUrl}</>}
                        />
                        <AboutMe description={cvData.aboutMe} />
                        <Experience experiences={cvData.experience} />

                        {/* <div className="w-80">{JSON.stringify(cvData)}</div> */}
                        <Clauses />
                    </MainContent>
                </PaperA4Sheet>
            </div>
        </>
    );
}

export default Cv;
