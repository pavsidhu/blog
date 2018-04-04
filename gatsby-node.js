const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const post = path.resolve('./src/templates/post.tsx')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) reject(result.errors)

        const { edges } = result.data.allMarkdownRemark

        edges.forEach(edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: post,
          })
        })
      })
    )
  })
}
