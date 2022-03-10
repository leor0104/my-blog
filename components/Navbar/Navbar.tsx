import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import { Avocado } from '@components/SVGIcons'
import ButtonGroup from '@components/ButtonGroup/ButtonGroup';

const Navbar = () => {
  const { pathname } = useRouter()


  return (
    <Menu secondary as="header" color='grey' >
      <Container text>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === '/'}
            title="Inicio | Todos los productos"
          >
            Leor IND
          </Menu.Item>
        </Link>
        <Link href="/contact" passHref>
          <Menu.Item active={pathname === '/contact'}>
            Contact
          </Menu.Item>
        </Link>
        <Link href="/" passHref>
          <Menu.Item active={pathname === '/work'}>
            Work
          </Menu.Item>
        </Link>
        <Link href="/about" passHref>
          <Menu.Item active={pathname === '/about'}>
            About
          </Menu.Item>
        </Link>
        <Link href="/services" passHref>
          <Menu.Item active={pathname === '/services'}>
            Services
          </Menu.Item>
        </Link>
        <Menu.Menu position='right'>
          <Menu.Item>
            <ButtonGroup />
          </Menu.Item>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.secondary {
          font-size: 1.2rem;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar
