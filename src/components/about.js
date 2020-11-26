import React from "react"
import styles from './about.module.scss'
import codeSVG from '../images/developer.svg'

export default function About() {
    return (
        <section className={styles.about} id="aboutme">
            <h1>About Me</h1>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <p>Hi, I’m Jack, a 15 year-old developer from the UK. I have been working with Java for 4 years
                        offering a variety of affordable services including Minecraft plugins and Discord bots. For the
                        past 2 years, I have spent time working with clients creating Python scripts and full-stack web
                        applications.</p>
                    <p>When you hire me, you can expect an active and experienced developer that can fulfil almost any
                        request at an affordable price with an efficient and organised approach.</p>
                </div>
                <div className={styles.aboutImage}>
                    <img src={codeSVG} alt="developer at a laptop programming"/>
                </div>
            </div>
        </section>
    )
}