import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import styles from '../../styles'
import logo from './logo.svg'

const headerStyles = {
  width: {
    large: '1232px',
  },
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Contents = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  max-width: ${styles.width.max};
  height: 64px;
  padding: 8px 16px;

  @media only screen and (min-width: ${headerStyles.width.large}) {
    padding: 8px 0;
  }
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
  font-size: 1.6em;
  margin-left: 32px;
`

const Header = () => (
  <Container>
    <Contents>
      <Link to="/" style={{ height: '100%' }}>
        <Logo src={logo} alt="My face" />
      </Link>

      <Menu>
        <MenuItem>
          <a href="https://pavsidhu.com">About</a>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </Contents>
  </Container>
)

export default Header
