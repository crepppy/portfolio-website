import React from "react"
import * as styles from './about.module.scss'
import codeSVG from '../images/developer.svg'

export default function About() {
    return (
        <section className={styles.about} id="aboutme">
            <div className="container">
                <h1>👩🏽‍💻 About Me</h1>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutContent}>
                        <p>Hi, I’m Jack (formerly crepppy), a 16 year-old developer from the UK. I have been working
                            with Java for 4 years as a freelancer offering a variety of services including,
                            but not limited to, Minecraft plugins and Discord bots. For the past 2 years, I have spent
                            time working with clients creating Python automation scripts and full-stack web
                            applications.</p>
                        <p>When you hire me, you can expect an active and experienced developer that can fulfil your 
	    		    request at an affordable price with an efficient and organised approach.</p>
                    </div>
                    <img className={styles.aboutImage} src={codeSVG} alt="developer at a laptop programming"/>
                </div>
            </div>
        </section>
    )
}