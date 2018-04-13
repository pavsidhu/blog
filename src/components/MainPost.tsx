import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import readingTime from 'reading-time'

import styles from '../styles'

const Container = styled.div`
  grid-column: 1 / 4;
  min-height: 240px;
  height: 40vh;
  clip-path: polygon(0 32px, 100% 0, 100% calc(100% - 32px), 0 100%);
  background-color: ${styles.color.orange};
  padding: 32px 16px;
  color: white;
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${styles.width.medium}) {
    height: 50vmin;
    min-height: 240px;
  }
`

const Contents = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;
  text-align: center;

  @media only screen and (min-width: ${styles.width.medium}) {
    font-size: 3.2rem;
    line-height: 4rem;
  }
`

const Subtext = styled.h4`
  font-size: 1.6rem;
  line-height: 4rem;
  display: flex;
`

const SubtextDot = styled.div`
  margin: 0 12px;
`

const Label = styled.p`
  font-size: 1.6rem;
  line-height: 4rem;
  text-transform: uppercase;
  font-weight: bold;
`

interface Props {
  post: {
    node: Post
  }
}

const MainPost: React.SFC<Props> = ({ post }) => {
  const { title, path, date } = post.node.frontmatter

  const textWithoutHTML = post.node.html.replace(/<[^>]*>/g, '')
  const readTime = readingTime(textWithoutHTML)

  return (
    <Container key={path}>
      <Contents to={path}>
        <Label>Latest Post:</Label>
        <Title>{title}</Title>
        <Subtext>
          {date}
          <SubtextDot>•</SubtextDot>
          {readTime.text}
        </Subtext>
      </Contents>
    </Container>
  )
}

export default MainPost
