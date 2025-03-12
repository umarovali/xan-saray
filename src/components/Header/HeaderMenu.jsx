import SocialCard from "../../ui/SocialCard/SocialCard";
import Icon1 from "../../assets/images/social_icon/social_icon_1.png";
import Icon2 from "../../assets/images/social_icon/social_icon_4.png";

export default function HeaderMenu() {
  return (
    <ul className="header_menu">
        <SocialCard icon={Icon1} name={"Адрес"} info={"г.Ош, ул. Курманжан датка 157"} />
        <SocialCard icon={Icon2} name={"Whatsapp"} info={"+996999466999"} />
    </ul>
  )
}
