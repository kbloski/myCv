import style from "./Details.module.scss";
import { DetaislProps } from "./types";
import { MyJourney } from "../../organisms";

function Details({} : DetaislProps) {
    return <div className={style.detailsPanel}>
        <div className={style.details}>
            <MyJourney />
            {/* <Container>
                <h4>
                    Details
                </h4>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aperiam esse voluptas quibusdam recusandae excepturi neque temporibus laudantium voluptatibus numquam rerum minima facilis debitis, dicta ullam ipsa omnis velit minus maiores voluptatem nam. Libero illo cupiditate dolorem officiis saepe, quis animi maiores nihil quam odio eos molestias sunt numquam aspernatur aliquam tempora expedita architecto sit enim. Optio, beatae placeat? Quia nesciunt maxime consequuntur at porro? Cum mollitia debitis minima aliquid corrupti voluptatibus voluptas quisquam temporibus quod, at culpa minus aperiam numquam eius modi 
                {children}
                <h4>
                    Pozdrawiam
                </h4>
            </Container> */}
        </div>
    </div>
}

export default Details;
