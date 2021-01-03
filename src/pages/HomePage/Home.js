import React from 'react'
import { Link } from 'react-router-dom'
import style from './Home.module.css'
import { FaInstagramSquare, FaVk } from 'react-icons/fa'

function Home() {
    return (
        <div className={style.homeContainer}>
            <div className={style.info}>
                <div className={style.underline}></div>
                <h1>I'm Sviatoslav</h1>
                <p>Frontend Developer</p>
                <div className={style.btn}>
                    <Link to='/contact'>CONTACT ME</Link>
                </div>
                <div className={style.icons}>        
                    <Link>
                        <FaInstagramSquare />
                    </Link>
                    <Link>
                        <FaVk />
                    </Link>
                </div>
            </div>
            <div className={style.img}>

            </div>
            <img />
        </div>
    )
}

export default Home
