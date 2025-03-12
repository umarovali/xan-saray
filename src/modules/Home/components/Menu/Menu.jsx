import Title from "../../../../ui/Title/Title";
import { ButtonPrimary } from "../../../../ui/Buttons/Buttons";
import MenuItem from "./MenuItem";
// foto
import MenuFoto1 from "../../../../assets/images/menu_foto/menu_foto_1.png";
import MenuFoto2 from "../../../../assets/images/menu_foto/menu_foto_2.png";
import MenuFoto3 from "../../../../assets/images/menu_foto/menu_foto_3.png";
import MenuFoto4 from "../../../../assets/images/menu_foto/menu_foto_4.png";
import MenuFoto5 from "../../../../assets/images/menu_foto/menu_foto_5.png";

export default function Menu() {
    return (
        <section className="menu">
            <div className="container">
                <div className="menu_wrapper">
                    <Title>Меню</Title>

                    <div className="menu_block">
                        <img className="menu_foto" src={MenuFoto1} alt="" />

                        <div className="menu_info">
                            <h3 className="menu_name">Лагман уйгурский</h3>
                            <p className="menu_ingredients">Тянутая лапша, мясо и овощи</p>
                            <p className="menu_price">190-200 сом</p>
                        </div>

                        <div className="menu_btn"><ButtonPrimary>Перейти в меню</ButtonPrimary></div>

                        <ul className="menu_list">
                            <MenuItem foto={MenuFoto2} name="Гульяш" price="190 сом" />
                            <MenuItem foto={MenuFoto3} name="Борщ" price="150-160 сом" />
                            <MenuItem foto={MenuFoto4} name="Манты жареныййй" price="35 сом/шт" />
                            <MenuItem foto={MenuFoto5} name="Лагман жареный" price="200 сом" />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}