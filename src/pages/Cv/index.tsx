import style from "./Cv.module.scss";
import { useSelector } from "react-redux";
import { getCvData } from "@entities/cv/model/selectors";

import { generatePDFandSave } from "@shared/utils/generatePDF";

import { Background, Container } from "@shared/components";

import { 
    AboutMe,
    A4Paper,
    TheHeader, 
    Contact,
    Clauses,
    Education,
    Experience,
    MainContent,
    PersonCard,
    ProfileImage,
    Sidebar,
    SoftSkills,
    TechnicalSkills,
} from '@features/cv/ui'

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
            <TheHeader onClick={handleGeneratePdf} />
            <Container>
                <A4Paper id="cv" className={style.cv}>
                    <Sidebar>
                        <ProfileImage src="/myCv/images/profile.png" />
                        <Contact
                            phone={cvData.contact.phone}
                            email={cvData.contact.email}
                            websites={userWebsitesList}
                            address={cvData.address}
                        />
                        <Education education={cvData.education} />
                        <TechnicalSkills
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

                        <Clauses />
                    </MainContent>
                </A4Paper>
            </Container>
        </>
    );
}

export default Cv;
