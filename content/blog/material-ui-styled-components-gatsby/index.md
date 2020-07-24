---
title: Material UI + Styled Components + Gatsby
date: 2020-07-24T14:13:01.464Z
description: Style your Gatsby website with Material UI and Styled Components
---
Install the Material UI and styled components plugin for Gatsby:

```shell
npm install gatsby-plugin-material-ui @material-ui/core gatsby-plugin-styled-components babel-plugin-styled-components styled-normalize fast-memoize
```

Add the plugins to your `gatsby-config` file:

```json
module.exports = {
  plugins: [
  `gatsby-plugin-material-ui`,
  `gatsby-plugin-styled-components`,
  ],
};
```

Add to the `layout.js` file:

```javascript
import { StylesProvider } from "@material-ui/styles"
import { ThemeProvider } from "@material-ui/core"
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components"
import { normalize } from "styled-normalize"
import theme from "../styles/theme"

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 62.5%; /* 62.5% of 16px = 10px */
  }

  body {
    margin: 0
  };
`
const Layout = ({ children }) => {
  return (
    <>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <main>{children}</main>
          </StyledThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </>
  )
}
```

And also add a `styles/theme.js` file:

```javascript
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import memoize from "fast-memoize"

const COLORS = {
  primary: "pink",
}

const createTheme = memoize(createMuiTheme)
const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: COLORS.primary,
    },
...
}
})

export default theme
```