import "./HomePage.scss"
import {PageTitle} from "../../components/UiLibraryComponents/PageTitle/PageTitle";

export const HomePage = () => {

    return (
        <div className={`homePage__main container`}>
            <PageTitle titleText={'StarNavi Test Task'} />
            <div>
                <p><b>Hello StarNavi team!</b></p>
                <ul>
                    <li>1. To see the task please click "Game page" link in header of footer.</li>
                    <li>2. Click "Start" button to start game.</li>
                    <li>3. If you want to change the field size please pick it up in select dropdown.</li>
                    <li>4. If you visit another page or change field size, current game will reset.</li>
                    <br/>
                    Thank you for your attention! Have a nice and peaceful day!
                </ul>
            </div>
        </div>
    )
}



