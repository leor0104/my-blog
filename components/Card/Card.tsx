import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import styles from '@components/Card/Card.module.css'

const CardExampleImageCard = () => (
    <Card>
        <Image src='/images/designecologist.jpg' wrapped ui={false} />
        <Card.Content>
            <Card.Header>UI|UX Design</Card.Header>
            <Card.Meta>Since 2019</Card.Meta>
            <Card.Description>
                Description of basic research you’ve conducted
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a className={styles.projects} 
            href="https://dribbble.com/Indev-Leor">
                <Icon name='dribbble' />
                3 Projects
            </a>
            <a>
                <Icon name='behance' />
                2 Projects
            </a>
        </Card.Content>
    </Card>

)

export default CardExampleImageCard