import './styles/App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Favourite from "./pages/Favourite";
import Header from "./components/Header/Header";
import {ThemeContext} from "./context";
import './styles/theme.module.css'


function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light"; // дефолтна тема dark
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/favourite" element={<Favourite />}/>
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>

    );
}

export default App;
