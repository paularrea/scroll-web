import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import styles from "./introScroll.module.scss"

const IntroAnimation = () => {
  return (
    <div className={styles.animation_container}>
    <div className={styles.wrapper}>
      <Parallax
        translateY={[0, -500]}
        className={styles.scroll_1}
      ></Parallax>
      <Parallax
        translateY={[20, -30]}
        className={styles.scroll_2}
      ></Parallax>
      <div className={styles.scroll_3}></div>
    </div>
  </div>
  )
}

export default IntroAnimation