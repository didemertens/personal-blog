import React from "react"
import { StylesProvider } from "@material-ui/styles"
import { ThemeProvider } from "@material-ui/core"
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components"
import { normalize } from "styled-normalize"
import theme from "../styles/theme"

import Header from "./Header/Header"

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  .main-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-height: 100vh;
  }

  html {
    font-size: 62.5%; /* 62.5% of 16px = 10px */
  }

  body {
    margin: 0
  }
  
  footer {
    position: absolute;
    bottom: 0;
  };
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
 
  return (
    <>
    <StylesProvider injectFirst>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <div className="main-container">
              <Header location={location} rootPath={rootPath} title={title} />
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
          </div>
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  </>
  )
}

export default Layout