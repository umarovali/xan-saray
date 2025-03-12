import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";

// Swiper фото
import SliderFoto1 from "../../../../assets/images/slider_foto/slider_foto_1.png";
import SliderFoto2 from "../../../../assets/images/slider_foto/slider_foto_2.png";
import SliderFoto3 from "../../../../assets/images/slider_foto/slider_foto_3.png";
import SliderFoto4 from "../../../../assets/images/slider_foto/slider_foto_4.png";
import SliderFoto5 from "../../../../assets/images/slider_foto/slider_foto_5.png";
import SliderFoto6 from "../../../../assets/images/slider_foto/slider_foto_6.png";
import SliderFoto7 from "../../../../assets/images/slider_foto/slider_foto_7.png";

import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
    return (
        <section className="slider">
            <div className="container">
                <div className="slider_wrapper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                    >
                        {[SliderFoto1, SliderFoto2, SliderFoto3, SliderFoto4, SliderFoto5, SliderFoto6, SliderFoto7].map(
                            (img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} alt={`Slide ${index + 1}`} />
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>

                    <div className="slider_arrow">
                        <button className="prev-btn">
                            <TfiArrowLeft className="slider_arrow_icons" />
                        </button>
                        <button className="next-btn">
                            <TfiArrowRight className="slider_arrow_icons" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}