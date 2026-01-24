import React from 'react'
import {Link} from "react-router-dom";
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <h2 className={style.logo}>
                <span className={style.accent}>weather</span>
                today
            </h2>
            <hr/>
            <Link className={style.link} to='/'>Home</Link>
            <Link className={style.link} to='/favourite'>Favourite</Link>
        </header>
    )
}

export default Header
