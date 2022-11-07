import {SimpleLink} from "../UiLibraryComponents/SimpleLink/SimpleLink";
import "../Header/Header.scss"
import logoImage from "../../assets/images/starnavilogo.png"
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const navigate = useNavigate()

    const handleClickOnLogo = () => {
        navigate(`/railsware`)
    }

    return (
        <div className={`header`}>
            <div className={`header__logo logo-wrapper`}
                onClick={() => handleClickOnLogo()}
            >
                <img src={logoImage} alt=""/>
            </div>
           <ul className={`header__links`}>
               <li className={`header__links-item`}>
                   {<SimpleLink navigatePath={"railsware"} linkText={"Home Page"}/>}
               </li>
               <li className={`header__links-item`}>
                   {<SimpleLink navigatePath={"starnavi"} linkText={"Game Page"}/>}
               </li>
           </ul>
        </div>
    )
}
