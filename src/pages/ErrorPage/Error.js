import React from 'react'
import { Link } from 'react-router-dom'
import style from './Error.module.css'

function Error() {
    return (
        <section className={style.error}>
            <h1>Ooops! Something went wrong. Let's go back!</h1>
            <div className={style.btn}>
                <Link to='/'>Go Home</Link>
            </div>
        </section>
    )
}

export default Error
