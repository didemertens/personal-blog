/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/08.png/" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p
        style={{
          maxWidth: 250,
        }}
      >
        Written by <strong>{author.name}</strong> {author.summary}
      </p>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{

        }}
      />
    </div >
  )
}

export default Bio
