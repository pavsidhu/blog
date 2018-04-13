import React from 'react'
import styled from 'styled-components'

import styles from '../../styles'
import mediumIcon from '../../assets/medium.svg'
import githubIcon from '../../assets/github.svg'
import twitterIcon from '../../assets/twitter.svg'
import emailIcon from '../../assets/email.svg'

const footerStyles = {
  width: {
    large: '1200px',
  },
}

const Container = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 16px;
  padding: 16px;

  @media only screen and (min-width: ${styles.width.medium}) {
    margin-top: 32px;
  }

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

  @media only screen and (min-width: ${styles.width.medium}) {
    flex-direction: row;
    max-width: ${styles.width.max};
  }
`

const SocialList = styled.div`
  display: none;

  @media only screen and (min-width: ${styles.width.medium}) {
    flex: 1;
    display: flex;
  }
`

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 16px;

  @media only screen and (min-width: ${styles.width.medium}) {
    width: 24px;
    height: 24px;
    margin: 0 32px 0 0;
  }
`

const Text️ = styled.p`
  font-size: 1.2em;
  color: ${styles.color.grey};

  @media only screen and (min-width: ${styles.width.medium}) {
    font-size: 1.4em;
  }
`

const Footer = () => (
  <Container>
    <Contents>
      <SocialList>
        <a href="https://medium.com/@pavsidhu">
          <SocialIcon src={mediumIcon} alt="Medium icon" />
        </a>

        <a href="https://github.com/pavsidhu">
          <SocialIcon src={githubIcon} alt="Github icon" />
        </a>

        <a href="https://twitter.com/pav_sidhu">
          <SocialIcon src={twitterIcon} alt="Twitter icon" />
        </a>

        <a href="mailto:pav@pavsidhu.com">
          <SocialIcon src={emailIcon} alt="Email icon" />
        </a>
      </SocialList>

      <Text️>Made With ❤️ by Pav Sidhu</Text️>
    </Contents>
  </Container>
)

export default Footer
