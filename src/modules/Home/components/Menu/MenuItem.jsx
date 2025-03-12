
export default function MenuItem({ foto, name, price }) {
    return (
        <li className="menu_item">
            <img className="menu_item_foto" src={foto} alt={name} />
            <h3 className="menu_item_name">{name}</h3>
            <p className="menu_item_price">{price}</p>
        </li>
    )
}
