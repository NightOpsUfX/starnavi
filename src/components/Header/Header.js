import {SimpleLink} from "../UiLibraryComponents/SimpleLink/SimpleLink";
import "../Header/Header.scss"

export const Header = () => {
    return (
        <div className={`header`}>
            <div className={`header__logo`}>
                Header Logo
            </div>
           <ul className={`header__links`}>
               <li className={`header__links-item`}>
                   {<SimpleLink navigatePath={"loginPage"} linkText={"Login Page"}/>}
               </li>
               <li className={`header__links-item`}>
                   {<SimpleLink navigatePath={"resetPasswordPage"}  linkText={"Reset Password Page"}/>}
               </li>
           </ul>
        </div>
    )
}
