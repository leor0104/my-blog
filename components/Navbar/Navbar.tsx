import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container, Input} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import { Avocado } from '@components/SVGIcons'
import ButtonGroup from '@components/ButtonGroup/ButtonGroup';

const Navbar = () => {
  const { pathname } = useRouter()


  return (
    <Menu size="huge" borderless pointing as="header" position="right">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === '/'}
            title="Inicio | Todos los productos"
          >
            <Avocado />
            Leor
          </Menu.Item>
        </Link>
        <Link href="/" passHref>
          <Menu.Item active={pathname === '/cart'}>
            Contact
          </Menu.Item>
        </Link>
        <Link href="/" passHref>
          <Menu.Item active={pathname === '/cart'}>
            Work
          </Menu.Item>
        </Link>
        <Link href="/about" passHref>
          <Menu.Item active={pathname === '/about'}>
            About
          </Menu.Item>
        </Link>
        <Link href="/" passHref>
          <Menu.Item active={pathname === '/cart'}>
            Services
          </Menu.Item>
        </Link>
        <Menu.Menu position='right'>
            <Menu.Item>
              <ButtonGroup/>
            </Menu.Item>
          </Menu.Menu>
          </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar
