import React from "react"
import {Helmet} from "react-helmet";
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills";
import Projects from "../components/projects";
import Testimonials from "../components/testimonials";
import "./index.scss"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/700.css"
import "@fontsource/raleway"

export default function Home() {
    return (
        <>
            <Helmet htmlAttributes={{lang: 'en'}}>
                <meta charSet="utf-8"/>
                <title>Jack Chapman</title>
                <link rel="canonical" href="https://jackchap.com"/>
                <meta name="theme-color" content="#6100B2"/>
                <meta name="description" content="I'm Jack, an experienced kotlin and full-stack web developer from Wales"/>
                <meta name="keywords" content="programmer, developer, kotlin, kotlin programmer, java programmer, java developer, kotlin developer, python developer, python programmer, web developer, spigot developer, spigot, minecraft plugin developer, minecraft plugins, discord bot developer, experienced" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@jackchapm" />
                <meta name="twitter:creator" content="@jackchapm" />
                <meta name="twitter:title" content="Jack Chapman" />
                <meta name="twitter:description" content="I'm Jack, an experienced kotlin and full-stack web developer from Wales" />
                <meta name="twitter:image" content="https://jackchap.com/profile.png" />

                <meta property="og:title" content="Jack Chapman" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://jackchap.com" />
                <meta property="og:image" content="https://jackchap.com/profile.png" />
                <meta property="og:description" content="I'm Jack, an experienced kotlin and full-stack web developer from Wales" />
                <meta property="og:first_name" content="Jack" />
                <meta property="og:last_name" content="Chapman" />
                <meta property="og:username" content="jackchapm" />
                <meta property="og:gender" content="male" />
            </Helmet>
            <Hero/>
            <div className="content">
                <About/>
                <Skills/>
                <Projects/>
                <Testimonials/>
            </div>
        </>
    )
}
