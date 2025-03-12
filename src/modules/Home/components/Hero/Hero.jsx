import FotoRight from "../../../../assets/images/hero_foto_right.png";
import HeroFoto from "../../../../assets/images/hero_foto.png";
import FotoFood from "../../../../assets/images/hero_foto_food.png";
import { ButtonPrimary } from "../../../../ui/Buttons/Buttons";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero_wrapper">
                    <img className="hero_foto" src={HeroFoto} alt="" />
                    <div className="hero_box"></div>
                    <h1 className="hero_title">Уютное Кафе в <span>городе Ош</span></h1>
                    <div className="hero_buttons">
                        <p className="hero_suptitle">Уютное место, где вас ждут изысканные блюда и тёплая атмосфера!</p>
                        <ButtonPrimary>Перейти в меню</ButtonPrimary>
                    </div>
                    <img className="hero_foto_food" src={FotoFood} alt="" />
                </div>
            </div>
            <img className="hero_foto_right" src={FotoRight} alt="" />
        </section>
    )
}
