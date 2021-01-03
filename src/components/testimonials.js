import React from 'react'
import Flickity from 'react-flickity-component'
import styles from './testimonials.module.scss'

import emadeonImg from '../images/emadeon.jpg'
import gcnImg from '../images/gcn.jpg'
import manhuntImg from '../images/manhunt.png'

export default function Testimonials() {
    const flickityOptions = {
        wrapAround: true,
        pageDots: false,
        autoPlay: 5000,
    }
    // TODO Convert images to use gatsby-image + experiment with auto play timing
    return (
        <section>
            <div className="container">
                <h1>💬 Testimonials</h1>
                <Flickity options={flickityOptions} static>
                    <div className={styles.carouselItem}>
                        <img src={emadeonImg} alt=""/>
                        <div>
                            <p>"crepppy always got the plugin done, he can code and configure almost any plugin. <span
                                className={styles.underline}>He is an amazing developer</span>."</p>
                            <p className={styles.author}>Emadeon, PrimarineMC</p>
                        </div>
                    </div>
                    <div className={styles.carouselItem}>
                        <img src={gcnImg} alt=""/>
                        <div>
                            <p>"<span className={styles.underline}>Fast, effective, and most of all quality</span>. You
                                want something done the right way? crepppy is your guy."</p>
                            <p className={styles.author}>DSyR, Gaming Club Network</p>
                        </div>
                    </div>
                    <div className={styles.carouselItem}>
                        <img src={manhuntImg} alt=""/>
                        <div>
                            <p>"Jack was an absolute pleasure to work with, kept me in the loop the whole time and
                                smashed out our plugins in a couple of days for an awesome price. <span
                                    className={styles.underline}>Couldn't recommend him more</span>"</p>
                            <p className={styles.author}>Dai, manhunt.rip</p>
                        </div>
                    </div>
                </Flickity>
            </div>
        </section>
    )
}