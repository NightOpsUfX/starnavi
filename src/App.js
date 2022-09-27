import './App.css';
import './variables.scss'
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import {ResetPasswordPage} from "./pages/ResetPasswordPage/ResetPasswordPage";

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/loginPage")
    },[])

  return (
    <div className="App">
        <Header/>
        <div className={`main`}>
            <Routes>
                <Route path="/loginPage" element={<LoginPage/>} />
                <Route path="/resetPasswordPage" element={<ResetPasswordPage test={"test123"}/>} />
            </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
