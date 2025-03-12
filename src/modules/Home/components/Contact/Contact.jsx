import SocialCard from "../../../../ui/SocialCard/SocialCard";
import Title from "../../../../ui/Title/Title";
// icon
import SocialIcon1 from "../.././../../assets/images/social_icon/social_icon_1.png";
import SocialIcon2 from "../.././../../assets/images/social_icon/social_icon_2.png";
import SocialIcon3 from "../.././../../assets/images/social_icon/social_icon_3.png";
import SocialIcon4 from "../.././../../assets/images/social_icon/social_icon_4.png";

export default function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <Title>Контакты и адрес</Title>
                <ul className="contact_list">
                    <SocialCard icon={SocialIcon1} name="Адрес" info="г.Ош, ул. Курманжан датка 157" />
                    <SocialCard icon={SocialIcon2} name="Instagram" info="@cafe_xan_saray" />
                    <SocialCard icon={SocialIcon3} name="TikTok" info="@xan_saray" />
                    <SocialCard icon={SocialIcon4} name="Whatsapp" info="+996999466999" />
                </ul>
            </div>
        </section>
    )
}
