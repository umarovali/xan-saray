import logo from "../../assets/images/logo.svg";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer_wrapper">
                    <img src={logo} alt="" />

                    <ul className="footer_list">
                        <li>© 2024 Xan-Saray. All Rights Reserved</li>
                        <li>Privacy and Policy</li>
                        <li><span>Разработка сайта:</span> Result Group</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
