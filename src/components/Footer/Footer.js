import {SimpleLink} from "../UiLibraryComponents/SimpleLink/SimpleLink";
import "../Footer/Footer.scss"
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/images/starnavilogo.png";

export const Footer = () => {
    const navigate = useNavigate()

    const handleClickOnLogo = () => {
        navigate(`/railsware`)
    }

    return (
        <div className={`footer`}>
            <div className={`footer__logo logo-wrapper`}
                 onClick={() => handleClickOnLogo()}
            >
                <img src={logoImage} alt=""/>
            </div>
            <ul className={`footer__links`}>
                <li className={`footer__links-item`}>
                    {<SimpleLink navigatePath={"railsware"} linkText={"Home Page"}/>}
                </li>
                <li className={`header__links-item`}>
                    {<SimpleLink navigatePath={"starnavi"} linkText={"Game Page"}/>}
                </li>
                <li className={`footer__links-item`}>
                    {<SimpleLink navigatePath={"loginPage"} linkText={"Login Page"}/>}
                </li>
                <li className={`footer__links-item`}>
                    {<SimpleLink navigatePath={"resetPasswordPage"}  linkText={"Reset Password Page"}/>}
                </li>
            </ul>
        </div>
    )
}
