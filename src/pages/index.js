import React from "react"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills";
import "./index.scss"
import "fontsource-roboto/100.css"
import "fontsource-roboto/300.css"
import "fontsource-roboto/700.css"
import "fontsource-raleway/"

export default function Home() {
    return (
        <div>
            <Hero/>
            <div className="content">
                <div className="container">
                    <About/>
                    <Skills/>
                </div>
            </div>

        </div>
    )
}
