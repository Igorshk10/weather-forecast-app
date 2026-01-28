import React from 'react'
import style from './SearchBar.module.css'
import {useTranslation} from "react-i18next";

function SearchBar() {
    const { t } = useTranslation();

    return (
        <div className={style.searchBar}>
            <input type="text" placeholder={t('search')}/>
            <div className={style.icon}>
                <i className='bx bx-search'></i>
            </div>
        </div>
    )
}

export default SearchBar
