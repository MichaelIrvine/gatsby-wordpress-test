import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"

const Post = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />

      <h1> {pageContext.title}</h1>
      {/* Conditionally render if data exists */}
      {pageContext.acf.portfolio_url && (
        <h3>
          <a href={pageContext.acf.portfolio_url}>
            {pageContext.acf.portfolio_url}
          </a>
        </h3>
      )}

      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}

export default Post
