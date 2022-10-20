import {useNavigate} from "react-router-dom";
import "../SimpleLink/SimpleLink.scss"

export const SimpleLink = ({navigatePath, linkText}) => {

    const navigate = useNavigate()

    const redirectFunction = (navigatePath) => {
        navigate(`/${navigatePath || ""}`)
    }


    return (
        <div className={`simple-link`} onClick={() => {redirectFunction(navigatePath)}}>
            <span>{linkText}</span>
        </div>
    )

}
