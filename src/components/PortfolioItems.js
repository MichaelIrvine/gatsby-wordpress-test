import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

const PortfolioItems = () => (
  <StaticQuery
    query={graphql`
      query {
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
            }
          }
        }
      }
    `}
    render={props =>
      props.allWordpressWpPortfolio.edges.map(portfolioItem => (
        <div key={portfolioItem.node.id}>
          <h2>{portfolioItem.node.title}</h2>
          <img
            src={portfolioItem.node.featured_media.source_url}
            alt="Thumbnail"
          />
          <div
            dangerouslySetInnerHTML={{ __html: portfolioItem.node.excerpt }}
          ></div>
          <Link to={`/portfolio/${portfolioItem.node.slug}`}>
            {portfolioItem.node.title}
          </Link>
        </div>
      ))
    }
  />
)

export default PortfolioItems
