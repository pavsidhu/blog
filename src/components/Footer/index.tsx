import React from 'react'
import styled from 'styled-components'

import styles from '../../styles'
import mediumIcon from './medium.svg'
import githubIcon from './github.svg'
import twitterIcon from './twitter.svg'
import emailIcon from './email.svg'

const footerStyles = {
  width: {
    medium: '700px',
    large: '1232px',
  },
}

const Container = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 32px;
  padding: 16px;

  @media only screen and (min-width: ${footerStyles.width.large}) {
    margin-top: 64px;
    padding: 16px 0;
  }
`

const Contents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${footerStyles.width.medium}) {
    flex-direction: row;
    max-width: ${styles.width.max};
  }
`

const SocialList = styled.div`
  flex: 1;
  display: flex;
  margin-bottom: 24px;

  @media only screen and (min-width: ${footerStyles.width.medium}) {
    margin-bottom: 0;
  }
`

const SocialItem = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 16px;

  @media only screen and (min-width: ${footerStyles.width.medium}) {
    width: 24px;
    height: 24px;
    margin: 0 32px 0 0;
  }
`

const Text️ = styled.p`
  font-size: 1.2em;
  color: ${styles.color.grey};

  @media only screen and (min-width: ${footerStyles.width.medium}) {
    font-size: 1.4em;
  }
`

const Footer = () => (
  <Container>
    <Contents>
      <SocialList>
        <a href="https://medium.com/@pavsidhu">
          <SocialItem src={mediumIcon} alt="Medium icon" />
        </a>
        <a href="https://github.com/pavsidhu">
          <SocialItem src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://twitter.com/pav_sidhu">
          <SocialItem src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="mailto:pav@pavsidhu.com">
          <SocialItem src={emailIcon} alt="Email icon" />
        </a>
      </SocialList>

      <Text️>Made With ❤️ by Pav Sidhu</Text️>
    </Contents>
  </Container>
)

export default Footer
