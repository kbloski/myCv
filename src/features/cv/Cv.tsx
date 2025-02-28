import { useSelector } from "react-redux";
import style from "./Cv.module.scss"
import { getCvData } from "./cvSlice";

function Cv(){
    const cvData = useSelector( getCvData)

    return (
        <div className={style.a4sheet}>
            <div>{ JSON.stringify(cvData) } </div>
        </div>
    );
}

export default Cv;