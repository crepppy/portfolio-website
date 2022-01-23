import React from 'react'
import SwiperCore, {A11y, Autoplay, Lazy, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import * as styles from './testimonials.module.scss'
import {StaticImage} from "gatsby-plugin-image";
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Lazy, Autoplay, A11y])

export default function Testimonials() {
    return (
        <section>
            <div className="container">
                <h2><span role="img" aria-label="speech bubble emoji">💬</span> Testimonials</h2>
                <Swiper navigation loop grabCursor autoplay={{
                    disableOnInteraction: true, delay: 8000
                }} className={styles.carousel}>
                    <SwiperSlide className={styles.carouselItem}>
                        <div className={styles.imgContainer}>
                            <StaticImage width={328} src="../images/emadeon.jpg" placeholder="tracedSVG" alt="Emadeon profile picture" />
                        </div>
                        <div>
                            <p>"Jack always got the plugin done, he can code and configure almost any plugin. <span
                                className={styles.underline}>He is an amazing developer</span>."</p>
                            <p className={styles.author}>Emadeon, PrimarineMC</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.carouselItem}>
                        <div className={styles.imgContainer}>
                            <StaticImage width={328} src="../images/gcn.jpg" placeholder="tracedSVG" alt="GCN logo" />
                        </div>
                        <div>
                            <p>"<span className={styles.underline}>Fast, effective, and most of all quality</span>. You
                                want something done the right way? Jack is your guy."</p>
                            <p className={styles.author}>DSyR, Gaming Club Network</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.carouselItem}>
                        <div className={styles.imgContainer}>
                            <StaticImage width={328} src="../images/manhunt.png" placeholder="tracedSVG" alt="Manhunt logo" />
                        </div>
                        <div>
                            <p>"Jack was an absolute pleasure to work with, kept me in the loop the whole time and
                                smashed out our plugins in a couple of days for an awesome price. <span
                                    className={styles.underline}>Couldn't recommend him more</span>"</p>
                            <p className={styles.author}>Dai, manhunt.rip</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.carouselItem}>
                        <div className={styles.imgContainer}>
                            <StaticImage width={328} src="../images/senseimunchkin.jpg" placeholder="tracedSVG" alt="SenseiMunchkin profile" />
                        </div>
                        <div>
                            <p>"<span className={styles.underline}>A breath of fresh air</span> in regard to my experience
                                working with Java developers"</p>
                            <p>"Fast, reasonably prices, and my plugin works flawlessly"</p>
                            <p className={styles.author}>SenseiMunchkin, CosmicDrift</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}