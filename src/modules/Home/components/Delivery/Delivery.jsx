import Title from "../../../../ui/Title/Title";
// foto
import DelivertFoto from "../../../../assets/images/delivey_foto.png";
import { ButtonPrimary, ButtonWhite } from "../../../../ui/Buttons/Buttons";

export default function Delivery() {
    return (
        <section className="delivery">
            <div className="container">
                <Title>Доставка и бронь</Title>
            </div>
            <div className="delivery_main">
                <div className="container">
                    <div className="delivery_wrapper">
                        <div className="delivery_content">
                            <p className="delivey_description">Чтобы заказать блюда или забронировать столик или кабинку, пожалуйста, свяжитесь с нами наиболее <span>удобным для вас способом.</span></p>
                            <div className="delivery_btns">
                                <ButtonPrimary>Позвонить</ButtonPrimary>
                                <ButtonWhite>Написать в Whatsapp</ButtonWhite>
                            </div>
                        </div>

                        <img className="delivery_foto" src={DelivertFoto} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
