import React from "react"
import * as styles from './hero.module.scss'
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

export default function Hero() {
    function goToAbout() {
        document.querySelector('#aboutme').scrollIntoView({
            behavior: 'smooth'
        });
    }

    const { placeholderImage } = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero-background.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `)
    
    const pluginImage = getImage(placeholderImage)
    const backgroundFluidImageStack = [
        `linear-gradient(rgba(18, 23, 24, .4), rgba(18, 23, 24, .4))`,
        pluginImage,
    ]
    
    return (
        <BgImage className={styles.heroBackground} alt="Hero background" image={backgroundFluidImageStack}>
        <div className={styles.heroContent}>
            <h1><span className={styles.wavingHand} role="img" aria-label="Hi">👋</span> I'm&nbsp;Jack</h1>
            <p>An experienced and reliable Java & Python developer</p>
        </div>
        <button className={styles.chevronDown} onClick={goToAbout}>
            <svg viewBox="0 0 512 512">
                <path
                    d="M256,496A240,240,0,0,1,86.294,86.294,240,240,0,0,1,425.706,425.706,238.43,238.43,0,0,1,256,496Zm0-448C141.309,48,48,141.309,48,256s93.309,208,208,208,208-93.309,208-208S370.691,48,256,48Z"/>
                <polygon
                    points="256 342.627 132.687 219.313 155.313 196.687 256 297.372 356.687 196.687 379.313 219.313 256 342.627"
                />
            </svg>
        </button>
        </BgImage>
    );
}