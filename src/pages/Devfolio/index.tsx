import style from './Devfolio.module.scss'

import { 
    BackgroundPage, 
    ContentWrapper,
    Details,
    Profile
} from "../../features/devfolio/ui";

function Portfolio(){
    return <div className={style.devfolio}>
        <BackgroundPage />
        <ContentWrapper>
            <Profile />
            <Details />
        </ContentWrapper>
    </div>
}

export default Portfolio;