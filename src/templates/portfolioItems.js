import React from "react"
import Layout from "../components/layout"
import PortfolioItems from "../components/PortfolioItems"
import SEO from "../components/SEO"

const portfolioItemsTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />

      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <PortfolioItems />
    </Layout>
  )
}

export default portfolioItemsTemplate
