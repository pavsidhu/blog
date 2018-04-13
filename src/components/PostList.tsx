import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import readingTime from 'reading-time'

import styles from '../styles'

const Container = styled.div`
  @media only screen and (min-width: ${styles.width.medium}) {
    @supports not (display: grid) {
      flex: 3;
      margin-right: 32px;
    }
  }
`

const Post = styled.div`
  background-color: #f8f8f8;
  margin-bottom: 16px;
  color: ${styles.color.grey};

  &:hover {
    background-color: ${styles.color.hover};
  }
`

const PostLink = styled(Link)`
  display: block;
  padding: 24px;
`

const Title = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;
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
  font-size: 1.6rem;
  line-height: 2.8rem;
`

interface Props {
  posts: Post[]
}

const Posts: React.SFC<Props> = ({ posts }) => (
  <Container>
    {posts.map(post => {
      const { title, path, date, cover } = post.node.frontmatter

      const textWithoutHTML = post.node.html.replace(/<[^>]*>/g, '')
      const readTime = readingTime(textWithoutHTML)

      return (
        <Post key={path}>
          <PostLink to={path}>
            {cover && <Cover src={cover} />}
            <Title>{title}</Title>
            <Subtext>
              {date}
              <SubtextDot>•</SubtextDot>
              {readTime.text}
            </Subtext>
            <Excerpt>{post.node.excerpt}</Excerpt>
          </PostLink>
        </Post>
      )
    })}
  </Container>
)

export default Posts
