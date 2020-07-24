import styled from "styled-components"
import { Link } from "gatsby"
import {Typography} from "@material-ui/core"

export const BigHeader = styled.h1`
&& {
    margin-top: 15px;
    font-size: 7rem;
}
`

export const SmallHeader = styled.h3`
&& {
    margin-top: 15px;
}
`

export const StyledLink = styled(Link)`
&& {
    box-shadow: none;
    color: inherit;
}
`

export const Name = styled(Typography)`
&& {
    text-align: center;
}
`