import React, {useContext, useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import style from './Header.module.css'
import { useTranslation } from "react-i18next";
import {ThemeContext} from "../../context/ThemeContext";
import {LanguageContext} from "../../context/LanguageContext";

function Header() {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { lang, toggleLanguage } = useContext(LanguageContext);


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
                <button onClick={toggleLanguage}>{lang.toUpperCase()}</button>
                <hr/>
                <button onClick={toggleTheme}>
                    {theme == 'light' ? <i className='bx bx-sun'></i> : <i class='bx bx-moon'></i>}
                </button>
            </div>
        </header>
    )
}

export default Header
