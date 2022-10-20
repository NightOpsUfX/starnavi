

import {SimpleLink} from "../UiLibraryComponents/SimpleLink/SimpleLink";
import "../Footer/Footer.scss"
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/images/logo-img.png";

export const Footer = () => {
    const navigate = useNavigate()

    const handleClickOnLogo = () => {
        navigate(`/`)
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
                    {<SimpleLink navigatePath={""} linkText={"Home Page Page"}/>}
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
