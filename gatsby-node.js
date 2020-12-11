const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "/",
    toPath: "/front-page",
    redirectInBrowser: true,
    isPermanent: true,
  })
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
            content
            title
          }
        }
      }
      allWordpressWpPortfolio {
        edges {
          node {
            id
            title
            excerpt
            content
            featured_media {
              source_url
            }
            slug
            template
            acf {
              portfolio_url
            }
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            title
            slug
            content
            excerpt
            wordpress_id
            date(formatString: "Do MMM YYYY HH:mm")
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressWpPortfolio,
    allWordpressPost,
  } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/pages/index.js`)
  const portfolioItems = path.resolve(`./src/templates/portfolioItems.js`)

  allWordpressPage.edges.forEach(edge => {
    const template =
      edge.node.template === "portfolio_items.php"
        ? portfolioItems
        : pageTemplate
    createPage({
      path: edge.node.slug,
      component: slash(template),
      context: edge.node,
    })
  })

  const portfolioTemplate = path.resolve(`./src/templates/posts/portfolio.js`)

  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: slash(portfolioTemplate),
      context: edge.node,
    })
  })

  const posts = allWordpressPost.edges
  const postTemplate = path.resolve(`./src/templates/posts/blog.js`)
  const postPerPage = 2
  const numOfPages = Math.ceil(posts.length / postPerPage)

  Array.from({ length: numOfPages }).forEach((page, index) => {
    createPage({
      path: index === 0 ? `/blog` : `/blog/${index + 1}`,
      component: slash(postTemplate),
      context: {
        posts: posts.slice(
          index * postPerPage,
          index * postPerPage + postPerPage
        ),
        numOfPages,
        currentPage: index + 1,
      },
    })
  })

  posts.forEach(post => {
    createPage({
      path: post.node.slug,
      component: slash(pageTemplate),
      context: post.node,
    })
  })
}
