import { 
    BackgroundPage, 
    ContentWrapper,
    Details,
    Profile
} from "../../features/devfolio/ui";

function Portfolio(){
    return <>
        <BackgroundPage />
        <ContentWrapper>
            <Profile />
            <Details />
        </ContentWrapper>
    </>
}

export default Portfolio;