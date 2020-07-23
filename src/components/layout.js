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
          color: `orange`,
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
      <header style={{ marginTop: rhythm(2), }}>{header}</header>
      <main style={{ paddingBottom: rhythm(2) }}>{children}</main>
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
  )
}

export default Layout
