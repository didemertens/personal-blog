import React from "react"

import { BigHeader, SmallHeader, StyledLink } from "./styles"

const Header = ({ location, rootPath, title }) => {
    let header

    if (location.pathname === rootPath) {
        header = (
          <BigHeader>
            <StyledLink to={`/`}>
              {title}
            </StyledLink>
          </BigHeader>
        )
      } else {
        header = (
          <SmallHeader>
            <StyledLink to={`/`}>
              {title}
            </StyledLink>
          </SmallHeader>
        )
      }

    return (
        <>{header}</>
    )
}

export default Header