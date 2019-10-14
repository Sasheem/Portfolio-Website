import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImageProjectOne = ({ alt }) => {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "project1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2880) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img alt={alt} fluid={data.project1.childImageSharp.fluid} />
}

export default ImageProjectOne
