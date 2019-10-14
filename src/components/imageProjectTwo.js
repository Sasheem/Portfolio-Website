import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImageProjectTwo = ({ alt }) => {
  const data = useStaticQuery(graphql`
    query {
      project2: file(relativePath: { eq: "project2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2880) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img alt={alt} fluid={data.project2.childImageSharp.fluid} />
}

export default ImageProjectTwo
