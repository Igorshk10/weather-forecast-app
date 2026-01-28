import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(
        localStorage.getItem("lang") || "en"
    );

    useEffect(() => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    }, [lang, i18n]);

    const toggleLanguage = () => {
        setLang(prev => (prev === "en" ? "ua" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};