import React from 'react'
import styled from 'styled-components'

import PostList from '../components/PostList'
import Bio from '../components/Bio'

const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`

const Contents = styled.main`
  max-width: 1200px;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 320px;
  grid-gap: 32px;
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
        <Contents>
          <PostList posts={posts} />
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
          excerpt
          frontmatter {
            path
            date(formatString: "Do MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
