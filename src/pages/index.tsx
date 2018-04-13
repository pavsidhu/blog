import React from 'react'
import styled from 'styled-components'

import MainPost from '../components/MainPost'
import PostList from '../components/PostList'
import Bio from '../components/Bio'
import Social from '../components/Social'
import styles from '../styles'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

const Contents = styled.div`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }

  max-width: 1200px;
  width: 100%;
  padding: 0 16px;

  @media only screen and (min-width: ${styles.width.medium}) {
    grid-template-columns: 1fr minmax(280px, 0.4fr);
    grid-gap: 32px;
    padding: 0 16px;

    @supports not (display: grid) {
      display: flex;
      flex-direction: row;
    }
  }

  @media only screen and (min-width: ${styles.width.max}) {
    padding: 0;
  }
`

const SidePanel = styled.aside`
  align-self: flex-start;

  @media only screen and (min-width: 600px) and (max-width: ${styles.width
      .medium}) {
    @supports (display: grid) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
    }
  }

  @media only screen and (min-width: ${styles.width.medium}) {
    @supports not (display: grid) {
      flex: 1;
    }
  }
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

          <SidePanel>
            <Bio />
            <Social />
          </SidePanel>
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
