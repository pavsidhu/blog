import React from 'react'
import styled from 'styled-components'

import styles from '../styles'
import mediumIcon from '../assets/medium.svg'
import githubIcon from '../assets/github.svg'
import twitterIcon from '../assets/twitter.svg'
import emailIcon from '../assets/email.svg'

const SocialList = styled.div`
  display: flex;
  flex-direction: column;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 16px 8px;

  &:hover {
    background-color: ${styles.color.hover};
  }
`

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`

const SocialLabel = styled.p`
  font-size: 1.6em;
  margin-bottom: 4px;
`

const SocialHandle = styled.p`
  font-size: 1.4em;
  color: #969696;
`

const SocialItem = ({
  label,
  handle,
  href,
  icon,
  alt,
}: {
  label: string
  handle: string
  href: string
  icon: string
  alt: string
}) => (
  <SocialLink href={href}>
    <SocialIcon src={icon} alt={alt} />

    <div>
      <SocialLabel>{label}</SocialLabel>
      <SocialHandle>{handle}</SocialHandle>
    </div>
  </SocialLink>
)

const Social = () => (
  <SocialList>
    <SocialItem
      label="Medium"
      handle="@pavsidhu"
      href="https://medium.com/@pavsidhu"
      icon={mediumIcon}
      alt="Medium icon"
    />

    <SocialItem
      label="GitHub"
      handle="@pavsidhu"
      href="https://github.com/pavsidhu"
      icon={githubIcon}
      alt="Github icon"
    />

    <SocialItem
      label="Twitter"
      handle="@pav_sidhu"
      href="https://twitter.com/pav_sidhu"
      icon={twitterIcon}
      alt="Twitter icon"
    />

    <SocialItem
      label="Email"
      handle="pav@pavsidhu.com"
      href="mailto:pav@pavsidhu.com"
      icon={emailIcon}
      alt="Email icon"
    />
  </SocialList>
)

export default Social
