import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  clip-path: polygon(0 16px, 100% 0, 100% calc(100% - 16px), 0 100%);
  background-color: #ececec;
  padding: 32px 16px;
`

const Title = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;
`

const Date = styled.h4`
  font-size: 1.4rem;
  line-height: 4rem;
`

interface Props {
  posts: {
    node: Post[]
  }
}

const Posts: React.SFC<Props> = ({ posts }) => (
  <div>
    {posts.map(post => {
      const { title, path, date } = post.node.frontmatter

      return (
        <Container key={path}>
          <Link to={path}>
            <Title>{title}</Title>
            <Date>{date}</Date>
            <p>{post.node.excerpt}</p>
          </Link>
        </Container>
      )
    })}
  </div>
)

export default Posts
