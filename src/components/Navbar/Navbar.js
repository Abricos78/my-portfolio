import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <section className={style.navbarContainer}>
            <h1 className={style.logo}>
                <Link to='/'>My Portfolio</Link>
            </h1>
            <ul className={style.navbar}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </section>
    )
}

export default Navbar
