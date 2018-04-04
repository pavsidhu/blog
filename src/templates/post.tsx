import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.header`
  width: 100vw;
  background-color: #f05f40;
  padding: 56px;
  clip-path: polygon(0 32px, 100% 0, 100% calc(100% - 32px), 0 100%);
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`

const HeaderContents = styled.div`
  max-width: 700px;
  width: 100%;
`

const Title = styled.h1`
  color: #ffffff;
  font-size: 3.2em;
  font-weight: normal;
  margin-bottom: 16px;
`

const Date = styled.p`
  color: #ffffff;
  font-size: 1.2em;
`

const Content = styled.article`
  max-width: 700px;
  font-size: 1.6em;
  line-height: 1.8em;
  color: #333333;
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

    return (
      <Container>
        <Helmet title={`${title} | ${siteTitle}`} />

        <Header>
          <HeaderContents>
            <Title>{title}</Title>
            <Date>Last updated on {date}</Date>
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
