import React, {useContext, useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import style from './Header.module.css'
import { useTranslation } from "react-i18next";
import {ThemeContext} from "../../context";

function Header() {
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useContext(ThemeContext);
    const [lang, setLang] = useState(i18n.language || "en");

    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang && savedLang !== i18n.language) {
            i18n.changeLanguage(savedLang);
            setLang(savedLang);
        }
    }, [i18n]);

    const languageSwitcher = () => {
        const newLang = lang === "en" ? "ua" : "en";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
        i18n.changeLanguage(newLang);
    }


    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <header className={style.header}>
            <h2 className={style.logo}>
                <span className={style.accent}>weather</span>
                today
            </h2>
            <hr/>
            <Link className={style.link} to='/'>{t("home")}</Link>
            <Link className={style.link} to='/favourite'>{t("fav")}</Link>
            <div className={style.settings}>
                <button onClick={languageSwitcher}>{lang.toUpperCase()}</button>
                <hr/>
                <button onClick={toggleTheme}>
                    <i className='bx bx-sun'></i>
                </button>
            </div>
        </header>
    )
}

export default Header
