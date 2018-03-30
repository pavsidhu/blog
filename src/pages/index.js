import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
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

class Main extends React.Component {
  render() {
    const { data } = this.props

    const posts = data ? data.allMarkdownRemark.edges : []

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

Main.propTypes = {
  route: React.PropTypes.object,
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
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
