import React from 'react'
import styled from 'styled-components'

import MainPost from '../components/MainPost'
import PostList from '../components/PostList'
import Bio from '../components/Bio'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-gap: 32px;
  max-width: 1200px;
  width: 100%;
`

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Post[]
    }
  }
}

class Main extends React.Component<Props> {
  render() {
    const { data } = this.props

    const posts: any = data ? data.allMarkdownRemark.edges : []

    return (
      <Container>
        <MainPost post={posts[0]} />
        <Contents>
          <PostList posts={posts.slice(1)} />
          <Bio />
        </Contents>
      </Container>
    )
  }
}

export default Main

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "Do MMMM YYYY")
            title
          }
          excerpt(pruneLength: 235)
          html
        }
      }
    }
  }
`
