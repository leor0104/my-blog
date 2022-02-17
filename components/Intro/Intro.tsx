import React from 'react'
import styles from '@components/Intro/Intro.module.css'
import { Image } from 'semantic-ui-react'

const src = "/images/subaru.jpg"

const Intro = () => (
    <div className={styles.container}>
        <Image src={src} size="medium" />
        <div className={styles.introResume}>
            <div className={styles.introTitle}>Hello, I'm Luis</div>
            <div className={styles.introDescription}>
                <p>
                Young student, 21 years old, final year student of design, Systems and Computer Engineering.
                </p>
            </div>
        </div>
    </div>
)

export default Intro