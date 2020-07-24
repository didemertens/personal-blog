import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import memoize from "fast-memoize"

const COLORS = {
  primary: "#fcba03",
}

const createTheme = memoize(createMuiTheme)
const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: COLORS.primary,
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "Serif",
    h1: {
      fontSize: "5rem",
    },
  },
})

export default theme
