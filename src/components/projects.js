import React from "react"
import * as styles from './projects.module.scss'
import {StaticImage} from "gatsby-plugin-image";
import ProjectData from "../content/projects.json"

export default function Projects() {
    const projectInfo = Object.fromEntries(Object.entries(ProjectData).map(([key, value], ) => [key, 
        <div className={styles.projectInfo}>
            <h3>
                {key} 
                <span className={styles.projectSub}>
                    {value.time !== undefined ? value.time + ' ' : ""}
                    {value.github !== undefined ? <a href={value.github}><svg viewBox="0 0 32 32">
                        <path
                            d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
                    </svg></a> : ""}
                </span>
            </h3>
            <p>{value.description}</p>
        </div>]
    ))
    
    return (
        <section>
            <div className="container">
                <h2>📁 Projects</h2>
                <p>Below is a selective list of my most notable projects that I have recently completed. I almost always have a
                project on the go and have many other projects that I will happily provide if needed.</p>
                
                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <StaticImage alt={"HackerRank logo"} src="../images/projects/hackerrank.png" placeholder="tracedSVG" />
                    </div>
                    {projectInfo["Coding Challenges"]}
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <StaticImage alt={"EU Roam Events logo"} src="../images/projects/eure.png" placeholder="tracedSVG" />
                    </div>
                    {projectInfo["EU Roam Events"]}
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <StaticImage alt={"Anime World logo"} src="../images/projects/animeworld.png" placeholder="tracedSVG" />
                    </div>
                    {projectInfo["Anime World"]}
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <StaticImage alt={"Manhunt logo"} src="../images/manhunt.png" placeholder="tracedSVG" />
                    </div>
                    {projectInfo["Manhunt"]}
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <StaticImage alt={"Minecraft iron bar"} src="../images/projects/ironbar.png" placeholder="tracedSVG" />
                    </div>
                    {projectInfo["MC Rivals Prison"]}
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <StaticImage alt={"Minecraft hopper"} src="../images/projects/hoppers.png" placeholder="tracedSVG" />
                    </div>
                    {projectInfo["Custom Hoppers"]}
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <StaticImage alt={"Facepunch Rust logo"} src="../images/projects/rust.png" placeholder="tracedSVG" />
                    </div>
                    {projectInfo["Rust"]}
                </div>
            </div>
        </section>
    )
}