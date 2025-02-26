import "./footer.css";
import vk from "./../../img/icons/vk.svg"
import instagram from "./../../img/icons/instagram.svg"
import twitter from "./../../img/icons/twitter.svg"
import github from "./../../img/icons/gitHub.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"

function Footer() {
    return(
        <>
     <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://www.instagram.com/sardor_djamolov7/" target="_blank"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/Sardor-web-dev" target="_blank"><img src={github} alt="Link"/></a></li>
                    <li className="social__item"><a href= "https://www.linkedin.com/in/sardor-djamolov-913897347/" target="_blank"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2025 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer;
