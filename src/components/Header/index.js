import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from './logo.svg'

const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
`

const Contents = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  max-width: 1200px;
  height: 64px;
  padding: 8px 16px;
`

const Logo = styled.img`
  height: 100%;
`

const Menu = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  list-style: none;
`

const MenuItem = styled.li`
  font-size: 1.8em;
  margin-left: 32px;

  @media only screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`

const Header = () => (
  <Container>
    <Contents>
      <Logo src={logo} alt="My face" />

      <Menu>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </Contents>
  </Container>
)

export default Header
