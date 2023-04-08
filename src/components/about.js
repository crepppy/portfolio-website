import React from "react"
import * as styles from './about.module.scss'
import codeSVG from '../images/developer.svg'

export default function About() {
    return (
        <section className={styles.about} id="aboutme">
            <div className="container">
                <h2><span role="img" aria-label="person writing code on laptop emoji">👩🏽‍💻</span> About Me</h2>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutContent}>
                        <p>Hi, I’m Jack, a versatile software developer from Wales, UK. I have been working
                            as a freelancer for over 5 years, offering a variety of services including Minecraft
                            plugins and Discord bots. I have also worked with clients to create numerous 
	                    automation scripts and full-stack web applications using a variety of languages and
	                    technologies.</p>
                        {/*<p>When you hire me, you can expect an active and experienced developer that will fulfil your
                            request at a fair price with an efficient and organised approach.</p>*/}
                    </div>
                    <img className={styles.aboutImage} src={codeSVG} width={500} height={375} alt="developer at a laptop programming"/>
                </div>
            </div>
        </section>
    )
}
