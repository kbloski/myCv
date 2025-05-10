// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/free-mode";
// @ts-ignore
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import { SwiperScrollContainerInterface } from "./interfaces";

function SwiperScrollContainer({children, className} : SwiperScrollContainerInterface)
{
    return (<>
        <Swiper
            direction={"vertical"}
            slidesPerView={'auto'}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className={"mySwiper " + className}
        >
            <SwiperSlide>
                {children}
            </SwiperSlide>
        </Swiper>
    </>)
}

export default SwiperScrollContainer;