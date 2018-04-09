import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import readingTime from 'reading-time'

import styles from '../styles'
import './prism.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.header`
  width: 100vw;
  background-color: #f05f40;
  clip-path: polygon(0 32px, 100% 0, 100% calc(100% - 32px), 0 100%);
  display: flex;
  justify-content: center;
  padding: 64px 0 56px;
  margin-bottom: 32px;
`

const HeaderContents = styled.div`
  max-width: ${styles.width.contentMax};
  width: 100%;
  padding: 0 16px;
`

const Title = styled.h1`
  color: #ffffff;
  font-size: 2.8em;
  font-weight: normal;
  margin-bottom: 8px;

  @media only screen and (min-width: ${styles.width.max}) {
    margin-bottom: 16px;
    font-size: 3.2em;
  }
`

const Date = styled.p`
  color: #ffffff;
  font-size: 1.2em;
`

const Content = styled.article`
  max-width: ${styles.width.contentMax};
  font-size: 1.6em;
  line-height: 1.8em;
  color: ${styles.color.grey};
  padding: 0 16px;
  width: 100%;

  & > *:not(:first-child) {
    margin-top: 32px;
  }

  h2 + *,
  h3 + *,
  h4 + *,
  h5 + *,
  h6 + * {
    margin-top: 16px;
  }

  ul,
  ol {
    margin-left: 1.1em;
  }

  p a {
    color: #f05f40;
    text-decoration: underline;
  }

  img,
  pre {
    width: 100%;
    max-width: ${styles.width.contentMax};
    border-radius: 4px;
  }

  pre {
    padding: 12px;
    border-radius: 4px;
    width: 100%;
    max-width: ${styles.width.contentMax};
    overflow: scroll;
    font-size: 1.6rem;
  }
`

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    markdownRemark: Post
  }
}

class BlogPost extends React.Component<Props> {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
      ? this.props.data.site.siteMetadata.title
      : null

    const {
      frontmatter: { title, date },
      html,
    } = this.props.data.markdownRemark

    const textWithoutHTML = html.replace(/<[^>]*>/g, '')
    const readTime = readingTime(textWithoutHTML)

    return (
      <Container>
        <Helmet title={`${title} | ${siteTitle}`} />

        <Header>
          <HeaderContents>
            <Title>{title}</Title>
            <Date>
              Last updated on {date} | {readTime.text}
            </Date>
          </HeaderContents>
        </Header>

        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`
