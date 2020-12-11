import React from "react"
import MainMenu from "./MainMenu"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans');
  
  body, html {
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
  }
`

const LayoutWrapper = styled.div`
  max-width: 75vw;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <MainMenu />
      <LayoutWrapper>{children}</LayoutWrapper>
    </div>
  )
}

export default Layout
