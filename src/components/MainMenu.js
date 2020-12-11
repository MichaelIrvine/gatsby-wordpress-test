import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import CustomLogo from "./CustomLogo"

const MainMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
`

const MenuItemsWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MenuItems = styled(Link)`
  padding: 8px 16px;
  color: black;

  &:hover {
    color: red;
  }
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              items {
                object_slug
                title
                object_id
              }
              name
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
        <CustomLogo />
        <MenuItemsWrapper>
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <MenuItems to={`/${item.object_slug}`} key={item.object_id}>
                {item.title}
              </MenuItems>
            )
          )}
        </MenuItemsWrapper>
      </MainMenuWrapper>
    )}
  />
)

export default MainMenu
