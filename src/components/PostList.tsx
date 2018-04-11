import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import readingTime from 'reading-time'

import styles from '../styles'

const Container = styled.div`
  background-color: #f8f8f8;
  padding: 24px;
  margin-bottom: 16px;
  color: ${styles.color.grey};
`

const Cover = styled.img`
  width: 100%;
`

const Title = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;

  &:hover {
    color: ${styles.color.orange};
  }
`

const Subtext = styled.h4`
  font-size: 1.4rem;
  line-height: 4rem;
  display: flex;
`

const SubtextDot = styled.div`
  margin: 0 12px;
`

const Excerpt = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
`

interface Props {
  posts: Post[]
}

const Posts: React.SFC<Props> = ({ posts }) => (
  <div>
    {posts.map(post => {
      const { title, path, date, cover } = post.node.frontmatter

      const textWithoutHTML = post.node.html.replace(/<[^>]*>/g, '')
      const readTime = readingTime(textWithoutHTML)

      return (
        <Container key={path}>
          <Link to={path}>
            {cover && <Cover src={cover} />}
            <Title>{title}</Title>
          </Link>
          <Subtext>
            {date}
            <SubtextDot>•</SubtextDot>
            {readTime.text}
          </Subtext>
          <Excerpt>{post.node.excerpt}</Excerpt>
        </Container>
      )
    })}
  </div>
)

export default Posts
