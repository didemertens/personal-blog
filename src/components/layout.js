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

  html {
    font-size: 62.5%; /* 62.5% of 16px = 10px */
  }

  body {
    margin: 0
  };
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  // let header

 
  return (
    <>
    <StylesProvider injectFirst>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <div
              style={{
                fontFamily: `sans-serif`,
                fontWeight: `200`,
                fontSize: `1.2rem`,
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: `80vw`,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                position: `relative`,
                minHeight: `100vh`,
              }}
            >
              <Header location={location} rootPath={rootPath} title={title} />
              <main>{children}</main>
              <footer
                style={{
                  position: `absolute`,
                  bottom: 0,
                }}
              >
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