import React from 'react'
import styles from '@components/Intro/Intro.module.css'
import { Image } from 'semantic-ui-react'

const src = "/images/subaru.jpg"

const Intro = () => (
    <div className={styles.container}>
        <Image src={src} size="medium" />
        <div className={styles.introResume}>
            <div className={styles.introTitle}>Hi, I'm Luis</div>
            <div >
                <p className={styles.introDescription}>
                    I have been part of university projects achieving experience
                    in front-end development of web and mobile applications for educational purposes.
                    Using languages and technologies such as Javascript, Typescript, React and NextJS.
                </p>
            </div>
        </div>
    </div>
)

export default Intro