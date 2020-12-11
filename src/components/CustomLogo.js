import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import styled from "styled-components"

const CustomLogoStyle = styled(Link)`
  padding: 0 16px;
`

const CustomLogoImage = styled.img`
  width: 125px;
`

const CustomLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpLogo {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `}
    render={props =>
      props.allWordpressWpLogo.edges.map((logo, index) => (
        <CustomLogoStyle key={index} to={`/front-page`}>
          <CustomLogoImage src={logo.node.url.source_url} alt="Main Logo" />
        </CustomLogoStyle>
      ))
    }
  />
)

export default CustomLogo
