

import {SimpleLink} from "../UiLibraryComponents/SimpleLink/SimpleLink";
import "../Footer/Footer.scss"

export const Footer = () => {
    return (
        <div className={`footer`}>
            <div className={`footer__logo`}>
                Footer Logo
            </div>
            <ul className={`footer__links`}>
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
