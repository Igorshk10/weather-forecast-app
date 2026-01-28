import './styles/App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Favourite from "./pages/Favourite";
import Header from "./components/Header/Header";
import {ThemeProvider} from "./context/ThemeContext";
import './styles/theme.module.css'
import SearchBar from "./components/SearchBar/SearchBar";
import {LanguageProvider} from "./context/LanguageContext";


function App() {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <Header />
                    <SearchBar />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/favourite" element={<Favourite />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </LanguageProvider>
    );
}


export default App;
