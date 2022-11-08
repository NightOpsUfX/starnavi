import './App.css';
import './static/scss/variables.scss'
import "./static/scss/globalStyles.scss"
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {HomePage} from "./pages/HomePage/HomePage";
import {GamePage} from "./pages/GamePage/GamePage";

function App() {
  const navigate = useNavigate()

  return (
    <div className="App">
        <Header/>
        <div className={`main`}>
            <Routes>
                <Route path="/home" element={<HomePage/>} />
                <Route path="/gamepage" element={<GamePage/>} />
                <Route path="/starnavi" element={<GamePage/>} />
            </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
