import React from 'react'
import SwiperCore, {A11y, Autoplay, Lazy, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import * as styles from './testimonials.module.scss'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from "gatsby"
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Lazy, Autoplay, A11y])

export default function Testimonials() {
    const profileImg = useStaticQuery(graphql`
        fragment profileImg on File {
            childImageSharp {
                fluid(quality: 100, maxWidth: 328) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }

        query {
            emadeon: file(relativePath: {eq: "emadeon.jpg"}) { ...profileImg }
            gcn:     file(relativePath: {eq: "gcn.jpg"})     { ...profileImg }
            manhunt: file(relativePath: {eq: "manhunt.png"}) { ...profileImg }
        }
    `)

    return (
        <section>
            <div className="container">
                <h1>💬 Testimonials</h1>
                <Swiper navigation loop grabCursor autoplay={{
                    disableOnInteraction: true, delay: 8000
                }} className={styles.carousel}>
                    <SwiperSlide className={styles.carouselItem}>
                        <div className={styles.imgContainer}>
                            <Img fluid={profileImg.emadeon.childImageSharp.fluid}/>
                        </div>
                        <div>
                            <p>"crepppy always got the plugin done, he can code and configure almost any plugin. <span
                                className={styles.underline}>He is an amazing developer</span>."</p>
                            <p className={styles.author}>Emadeon, PrimarineMC</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.carouselItem}>
                        <div className={styles.imgContainer}>
                            <Img fluid={profileImg.gcn.childImageSharp.fluid}/>
                        </div>
                        <div>
                            <p>"<span className={styles.underline}>Fast, effective, and most of all quality</span>. You
                                want something done the right way? crepppy is your guy."</p>
                            <p className={styles.author}>DSyR, Gaming Club Network</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.carouselItem}>
                        <div className={styles.imgContainer}>
                            <Img fluid={profileImg.manhunt.childImageSharp.fluid}/>
                        </div>
                        <div>
                            <p>"Jack was an absolute pleasure to work with, kept me in the loop the whole time and
                                smashed out our plugins in a couple of days for an awesome price. <span
                                    className={styles.underline}>Couldn't recommend him more</span>"</p>
                            <p className={styles.author}>Dai, manhunt.rip</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}