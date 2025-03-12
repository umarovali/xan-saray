import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/logo.svg";
import HeaderItem from "./HeaderItem";
import { BsTelephone } from "react-icons/bs";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
    const [openBurger, setOpenBurger] = useState(false);
    const headerRef = useRef(null);

    const handleOpenBurger = () => {
        setOpenBurger(!openBurger);
    };

    const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            setOpenBurger(false);
        }
    };

    useEffect(() => {
        if (openBurger) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [openBurger]);

    return (
        <header ref={headerRef}>
            <div className="container">
                <div className="header_wrapper">
                    <button onClick={handleOpenBurger} className="herader_menu_burger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <img className="header_logo" src={Logo} alt="Хан Сарай" />

                    <nav>
                        <div className={`header_menu_drop ${openBurger || "close"}`}>
                            <ul className="header_list">
                                <HeaderItem text="О нас" />
                                <HeaderItem text="Меню" />
                                <HeaderItem text="Доставка и бронь" />
                                <HeaderItem text="Контакты" />
                                <HeaderItem text="Адрес" />
                            </ul>
                            {openBurger && <HeaderMenu />}
                            <button onClick={handleOpenBurger} className="header_menu_close">
                                &times;
                            </button>
                        </div>
                        <div className="header_phone">
                            <BsTelephone />
                            <p>+996559477741</p>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
