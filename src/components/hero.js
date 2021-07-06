import React from "react"
import * as styles from './hero.module.scss'
import {Link} from 'react-scroll'
import {graphql, useStaticQuery} from "gatsby"
import BackgroundImage from 'gatsby-background-image'

export default function Hero() {
    const backgroundQuery = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "hero-background.jpg"}) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 2560) {
                        ...GatsbyImageSharpFluid_withWebp
                        ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                }
            }
        }
    `)


    return (
        <BackgroundImage className={styles.heroBackground}
                         fluid={[`linear-gradient(rgba(18, 23, 24, .4), rgba(18, 23, 24, .4))`, backgroundQuery.file.childImageSharp.fluid]}>
            <div className={styles.heroContent}>
                <h1><span className={styles.wavingHand} role="img" aria-label="Hi">👋</span> I'm&nbsp;Jack</h1>
                <p>An experienced and reliable Java & Python developer</p>
            </div>
            <Link className={styles.chevronDown} to="aboutme" smooth={true} duration={600}>
                <svg viewBox="0 0 512 512">
                    <path
                        d="M256,496A240,240,0,0,1,86.294,86.294,240,240,0,0,1,425.706,425.706,238.43,238.43,0,0,1,256,496Zm0-448C141.309,48,48,141.309,48,256s93.309,208,208,208,208-93.309,208-208S370.691,48,256,48Z"/>
                    <polygon
                        points="256 342.627 132.687 219.313 155.313 196.687 256 297.372 356.687 196.687 379.313 219.313 256 342.627"
                    />
                </svg>
            </Link>
        </BackgroundImage>
    )
}