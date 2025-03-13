import MainContainer, { MainContainerContent } from "./ui/MainContent/MainContainer"
import Title from "./ui/Title";

function Clauses(){
    return (
        <MainContainer>
            <Title mode="underline">Clauses</Title>
            <MainContainerContent>
                <div>
                    "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
                    niezbędnych do realizacji procesu rekrutacji zgodnie z
                    Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
                    27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
                    przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
                    takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)."
                    lorem2000
                </div>
            </MainContainerContent>
        </MainContainer>
    );
}

export default Clauses;