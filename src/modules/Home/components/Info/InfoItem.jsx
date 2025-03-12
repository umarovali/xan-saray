
export default function InfoItem({icon, text}) {
    return (
        <li className="info_item">
            <img src={icon} alt="" />
            <p className="info_text">{text}</p>
        </li>
    )
}
