import './App.css';
import './static/scss/variables.scss'
import "./static/scss/globalStyles.scss"
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import {ResetPasswordPage} from "./pages/ResetPasswordPage/ResetPasswordPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {GamePage} from "./pages/GamePage/GamePage";

function App() {
    const navigate = useNavigate()

    // useEffect(() => {
    //     navigate("/loginPage")
    // },[])

  return (
    <div className="App">
        <Header/>
        <div className={`main`}>
            <Routes>
                <Route path="/" element={<HomePage/>} />

                <Route path="/gamepage" element={<GamePage/>} />
                <Route path="/starnavi" element={<GamePage/>} />

                <Route path="/railsware" element={<HomePage/>} />
                <Route path="/loginPage" element={<LoginPage/>} />
                <Route path="/resetPasswordPage" element={<ResetPasswordPage test={"test123"}/>} />
            </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
