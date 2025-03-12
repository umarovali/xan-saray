
export default function SocialCard({icon, name, info}) {
    return (
        <li className="social_card">
            <div className="social_icon_name">
                <img src={icon} alt="" />
                <h4 className="socail_name">{name}</h4>
            </div>

            <p className="social_info">{info}</p>
        </li>
    )
}
