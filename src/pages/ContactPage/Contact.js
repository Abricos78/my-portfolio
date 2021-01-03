import React from 'react'
import style from './Contact.module.css'

function Contact() {
    return (
        <section className={style.contact}>
            <h1>Get In Touch</h1>
            <form className={style.form}>
                <input name='name' type='text' placeholder='name' />
                <input name='email' type='email' placeholder='email' />
                <textarea name='message' type='text-area' rows='5' placeholder='message' />
                <button type='submit' className={style.send}>Submit</button>
            </form>
        </section>
    )
}

export default Contact
