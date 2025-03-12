import InfoItem from "./InfoItem";
// icon
import InfoIcon1 from "../../../../assets/images/info_icon/info_icon_1.svg";
import InfoIcon2 from "../../../../assets/images/info_icon/info_icon_2.svg";
import InfoIcon3 from "../../../../assets/images/info_icon/info_icon_3.svg";
import InfoIcon4 from "../../../../assets/images/info_icon/info_icon_4.svg";

export default function Info() {
    return (
        <section className="info">
            <div className="container">
                <ul className="info_wrapper">
                    <InfoItem icon={InfoIcon1} text="Вместимость до 250 человек" />
                    <InfoItem icon={InfoIcon2} text="10 VIP кабинок для банкет" />
                    <InfoItem icon={InfoIcon3} text="Удобная расположения" />
                    <InfoItem icon={InfoIcon4} text="Очень приятная атмосфера" />
                </ul>
            </div>
        </section>
    )
}
