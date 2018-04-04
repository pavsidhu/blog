import React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

import Header from '../components/Header'
import favicon16 from './favicons/16.png'
import favicon32 from './favicons/32.png'
import favicon48 from './favicons/48.png'

injectGlobal`
  html {
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

interface Props {
  children: () => JSX.Element
}

class Template extends React.Component<Props> {
  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet title="Pav Sidhu">
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="48x48" href={favicon48} />
        </Helmet>

        <Header />
        {children()}
      </div>
    )
  }
}

export default Template
