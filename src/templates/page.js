import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />

      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}

export default Page
