import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import favicon16 from './favicons/16.png'
import favicon32 from './favicons/32.png'
import favicon48 from './favicons/48.png'

injectGlobal`
  html {
    height: 100%;
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    min-height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`

interface Props {
  children: () => JSX.Element
}

class Template extends React.Component<Props> {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Helmet title="Pav Sidhu">
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="48x48" href={favicon48} />
        </Helmet>

        <Header />
        {children()}
        <Footer />
      </Container>
    )
  }
}

export default Template
