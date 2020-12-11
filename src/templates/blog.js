import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
`
const PageNumberWrapper = styled.div`
  background-color: ${props => (props.isCurrentPage ? `#e2e2e2` : `#eeeeee`)};
  padding: 8px;
  margin-top: 16px;
  margin-right: 8px;

  &:hover {
    background-color: #e2e2e2;
  }
`

const PageNumberLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Blog = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="blog posts" />
      {pageContext.posts.map(post => (
        <div key={post.node.wordpress_id}>
          <h3>{post.node.title}</h3>
          <small>{post.node.date}</small>
          <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }}></p>
          <Link to={`/${post.node.slug}`}>Read More...</Link>
        </div>
      ))}
      <Pagination>
        {Array.from({ length: pageContext.numOfPages }).map((page, index) => (
          <PageNumberWrapper
            key={index}
            isCurrentPage={index + 1 === pageContext.currentPage}
          >
            <PageNumberLink to={index === 0 ? `/blog` : `/blog/${index + 1}`}>
              {index + 1}
            </PageNumberLink>
          </PageNumberWrapper>
        ))}
      </Pagination>
    </Layout>
  )
}

export default Blog
