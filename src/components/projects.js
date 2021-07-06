import React from "react"
import * as styles from './projects.module.scss'
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

export default function Projects() {
    const projectImg = useStaticQuery(graphql`
        fragment projects on File {
            childImageSharp {
                fluid(quality: 100, maxWidth: 328) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }

        query {
            manhunt: file(relativePath: {eq: "manhunt.png"}) { ...projects }
            eure: file(relativePath: {eq: "projects/eure.png"}) { ...projects }
            animeworld: file(relativePath: {eq: "projects/animeworld.png"}) { ...projects }
            hoppers: file(relativePath: {eq: "projects/hoppers.png"}) { ...projects }
            enderpearl: file(relativePath: {eq: "projects/enderpearl.png"}) { ...projects }
            rust: file(relativePath: {eq: "projects/rust.png"}) { ...projects }
            hackerrank: file(relativePath: {eq: "projects/hackerrank.png"}) { ...projects }
            ironbar: file(relativePath: {eq: "projects/ironbar.png"}) { ...projects }
        }
    `)

    const projects = [
        {
            title: "Manhunt",
            description: `
                Manhunt is a plugin which recreates Dream's manhunt series. The project consisted of a 
                Bungeecord plugin for lobby and player management and a Spigot plugin to implement gameplay.
            `,
            image: projectImg.manhunt,
            time: "October 2020",
            github: "https://github.com/crepppy/manhunt"
        },
        {
            title: "EU Roam Events",
            description: `
                Whilst working with EURE, I provided system administration for their event servers and 
                developed a discord bot to automate their weekly events. This included discord-steam linking, 
                team management and automatic server whitelisting. I also developed a web app and rust plugin for live 
                leaderboard and bot control.
            `,
            image: projectImg.eure,
            time: "April 2021-Present",
            github: "https://github.com/crepppy/eu-roam-events-discord"
        },
        {
            title: "Anime World",
            description: `
                Anime World is an upcoming Minecraft RPG server which I worked with to develop equipable titles and a 
                player job system with tasks that could be completed to earn money.
            `,
            image: projectImg.animeworld,
            time: "January 2021"
        },
        {
            title: "Coding Challenges",
            description: `
                 Good problem solving skills are fundamental for any successful developer.
                 My repository of coding challenges from sites such as HackerRank show my capability to code efficient
                 and logical solutions to complex problems.
            `,
            image: projectImg.hackerrank,
            time: "June 2021-Present",
            github: "https://github.com/crepppy/coding-challenges"
        },
        {
            title: "Custom Hoppers",
            description: `
                An upgradable hopper system with faster extraction rates that can suck up items in a region and 
                includes remote inventory support that can whitelist / blacklist items.`,
            image: projectImg.hoppers,
            time: "September 2019",
            github: "https://github.com/crepppy-old/custom-hopper-plugin"
        },
        {
            title: "MC Rivals Prison",
            description: `
                A fully custom prison experience made with quests, custom enchants and personal mines. This project
                was coded in a team of two and built on my collaborative and communication skills.`,
            image: projectImg.ironbar,
            time: "August 2020",
            github: "https://github.com/crepppy-old/mcrivals-prison"
        },
        {
            title: "Rust",
            description: `Spigot remake of the game Rust by Facepunch Studios. Includes key features such as guns, 
            clans, custom crafting, resource nodes, radiation zones all provided in vanilla Minecraft through a 
            resource pack`,
            image: projectImg.rust,
            time: "2018-2019"
        },
    ].sort((a, b) => time(a) > time(b) ? -1 : 1).map(proj =>
        <div className={styles.project} key={proj.title}>
            {proj.image !== undefined &&
            <div className={styles.projectImg}>
                <Img fluid={proj.image.childImageSharp.fluid}/>
            </div>
            }
            <div className={styles.projectInfo}>
                <h3>
                    {proj.title} 
                    <span className={styles.projectSub}>
                        {proj.time !== undefined ? proj.time + ' ' : ""}
                        {proj.github !== undefined ? <a href={proj.github}><svg viewBox="0 0 32 32">
                            <path
                                d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
                        </svg></a> : ""}
                    </span>
                </h3>
                <p>{proj.description}</p>
            </div>
        </div>
    )
    
    function time(project) {
        const lower = project.time.split("-")[0]
        let [month, year] = lower.split(" ")
        if(year === undefined) year = month
        let m = 0
        switch (month) {
            case "January": m = 1; break; 
            case "February": m = 2; break; 
            case "March": m = 3; break; 
            case "April": m = 4; break; 
            case "May": m = 5; break; 
            case "June": m = 6; break; 
            case "July": m = 7; break; 
            case "August": m = 8; break; 
            case "September": m = 9; break; 
            case "October": m = 10; break; 
            case "November": m = 11; break; 
            case "December": m = 12; break; 
        }
        return parseInt(year) * 100 + m        
    }
    
    return (
        <section>
            <div className="container">
                <h2>📁 Projects</h2>
                <p>Below is a selective list of my most notable projects that I have recently completed. I almost always have a
                project on the go and have many other projects that I will happily provide if needed.</p>
                {projects}
            </div>
        </section>
    )
}