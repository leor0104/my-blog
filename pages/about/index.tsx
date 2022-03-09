import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

const avoFacts = [
  {
    title: 'The drawing',
    content:
      'When I was 5 years old I used to practice drawing with watercolors, I liked to recreate any drawing I saw in a storybook. Today I still like to paint with watercolors as a hobby, but I’m not very good at it. ',
  },
  {
    title: 'The Nature',
    content:
      'I have a great fondness for animals and nature. I love spending time outdoors and observing the beauty of the natural world. I also enjoy interacting with animals and feel a strong connection to them. I believe that animals are intelligent and sensitive creatures, and I appreciate their unique abilities. ',
  },
  {
    title: 'A social person',
    content:
      'I want to know what is happening in the world, and I want to know about the people in my life. I like to be able to have conversations about a variety of topics, and I enjoy learning new things. ',
  },
  {
    title: 'Biology and Archeology',
    content:
      'These are two of my favorite areas, which I enjoy listening to and watching documentaries about. ',
  },
  {
    title: 'Music',
    content:
      'My favorite genre is Hip Hop, but I also like songs from other types of genres and bands like Coldplay. Some of my favorite Hip Hop songs are "Lose Yourself" by Eminem, "In Da Club" by 50 Cent and "Stil" by Dr. Dre. ',
  },
  {
    title: 'Artificial Intelligence',
    content:
      'I am very interested in artificial intelligence (AI) and robotics. I wish I could contribute several things for the benefit of society. ',
  },
  {
    title: 'My thinking',
    content:
      'This is a very common saying that basically means that to be successful, one must work hard and also be lucky. And I think success is a combination of hard work and luck. ',
  },
]

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <Header as="h1" textAlign="center">
        7 facts about me
        </Header>
        <figure>
          <Image src="/images/me.jpg" alt="Subaru Impreza" />
          <figcaption>
            Originally from{' '}
            <a
              target="_blank"
              href="https://es.wikipedia.org/wiki/Loja_(Ecuador)"
            >
              Loja, Ecuador
            </a>
          </figcaption>
        </figure>
        <ol>
          {avoFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }

        figure {
          margin: 2rem auto 3rem;
          text-align: center;
        }
        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;
          color: grey;
        }

        ol {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);

          // Boring stuff
          position: absolute;
          top: -43px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }

        li {
          position: relative;
        }
        h3:first-child {
          padding-left: 40px;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage
