import style from "./Cv.module.scss";
import { useSelector } from "react-redux";
import { getCvData } from "../../entities/cv/model/selectors";

import Sidebar from "../../features/cv/ui/Sidebar/Sidebar";
import MainContent from "../../features/cv/ui/Main/MainContent";
import Contact from "../../features/cv/ui/Contact";
import Education from "../../features/cv/ui/Education";
import TechnicalSkils from "../../features/cv/ui/TechnicalSkils/TechnicalSkills";
import PersonCard from "../../features/cv/ui/PersonCard";
import PaperA4Sheet from "../../features/cv/ui/A4Paper";
import AboutMe from "../../features/cv/ui/AboutMe";
import Experience from "../../features/cv/ui/Experience";
import Clauses from "../../features/cv/ui/Clauses";
import { generatePDFandSave } from "../../shared/utils/generatePDF";
import Background from "../../features/cv/ui/PageBackground";
import ProfileImage from "../../features/cv/ui/ProfileImage";
import SoftSkills from "../../features/cv/ui/SoftSkills";

function Cv() {
    const cvData = useSelector(getCvData);

    const userWebsitesList = cvData.contact.websites.map((data) => data.url);
    const cvGithubUrl = "https://kbloski.github.io/myCv/";

    function handleGeneratePdf() {
        const cvElement = document.getElementById("cv");
        if (!cvElement)
            throw new Error("Don't find html element for generate cv.");

        generatePDFandSave({
            elementHtml: cvElement,
            filename: "kamil_błoński_cv",
        });
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
                        <TechnicalSkils
                            skills={cvData.skills.programming.familiar}
                        />
                        <SoftSkills skills={cvData.skills.soft} />
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
