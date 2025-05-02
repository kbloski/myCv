import style from "./Banner.module.scss";

function Banner()
{
    return <div className={style.banner}>
        <img src="images/baner-broken-glass-cpu.png" alt="Baner" />
    </div>
}

export default Banner;