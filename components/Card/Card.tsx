import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import styles from '@components/Card/Card.module.css'

const services = [{
    idService: 0,
    name: 'UI|UX Design',
    img: '/images/designecologist.jpg',
    since: 'Since 2019',
    description: 'Description of basic research you’ve conducted',
    networks: [{
        name: 'Dribbble',
        link: 'https://dribbble.com/Indev-Leor',
        icon: 'dribbble'
    },
    {
        name: 'Behance',
        link: 'https://www.behance.net/luisortiz43',
        icon: 'behance'
    },
    ]

},
{
    idService: 1,
    name: 'Web Development',
    img: '/images/webapp.jpg',
    since: 'Since 2020',
    description: 'Description of basic research you’ve conducted',
    networks: [{
        name: 'GitHub',
        link: 'https://github.com/leor0104',
        icon: 'github'
    }]
},
{
    idService: 2,
    name: 'Mobile Development',
    img: '/images/mobileapp.jpg',
    since: 'Since 2020',
    description: 'Description of basic research you’ve conducted',
    networks: [{
        name: 'GitHub',
        link: 'https://github.com/leor0104',
        icon: 'github'
    }]
},
]

const CardService = () => (
    <>
        {services.map((service) => {
            return (
                <Card key={service.idService}
                >
                    <Image src={service.img} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{service.name}</Card.Header>
                        <Card.Meta>{service.since}</Card.Meta>
                        <Card.Description>
                            {service.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        {service.networks.map(network => {
                            return (
                                <a key={network.name}
                                className={styles.a}
                                    href={network.link}>
                                    <Icon name={network.icon as any} />
                                    {network.name}
                                </a>
                            )
                        })}
                    </Card.Content>
                    <style jsx global>{`
                        .ui.card {
                        margin-right: 16px;
                        margin-bottom: 0px;
                        margin-top: 16px;
                        width: 210px;
                        font-size: 0.8em;
                        }
                    `}</style>
                </Card>
            )
        })}
    </>
)

export default CardService;