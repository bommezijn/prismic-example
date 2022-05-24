const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
  {
    allPrismicPost {
      edges {
        node {
          data {
            title {
              text
            }
            text {
              html
            }
          }
          uid
        }
      }
    }
  }
`)

  const postTemplate = path.resolve('./src/components/postTemplate/PostTemplate.js')

  pages.data.allPrismicPost.edges.forEach((edge) => {
    createPage({
      path: `${edge.node.uid}`,
      component: postTemplate,
      context: {
        ...edge.node
      },
    })
  })
}
