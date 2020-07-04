import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(2),
          marginTop: 0,
          fontSize: `6rem`,
          fontFamily: `Open Sans, sans-serif`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        fontFamily: `sans-serif`,
        fontWeight: `200`,
        fontSize: `1.2rem`,
        marginTop: rhythm(2),
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(35),
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
        style={{
          position: `fixed`,
          bottom: 0,
          backgroundColor: `white`
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
