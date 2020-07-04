import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "body": {
      fontFamily: `Open Sans, sans-serif`,
      fontWeight: `100`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1 > a ": {
      fontWeight: `100`,
    },
    "h3": {
      fontSize: "2rem",
    },
    "h3, a": {
      width: `fit-content`,
      fontWeight: `100`,
      fontFamily: `sans-serif`,
      padding: `3px`,
      boxShadow: `inset 0 -3px 0 #ffa502`,
      transition: `all .2s ease-in`,
      color: `black`,
    },
    "h3:hover": {
      color: `white`,
      boxShadow: `inset 0 -40px 0 #ffa502`,
    },
    "a:hover": {
      color: `white`,
      boxShadow: `inset 0 -30px 0 #ffa502`,
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
