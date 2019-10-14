import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImageProjectThree = ({ alt }) => {
  const data = useStaticQuery(graphql`
    query {
      project3: file(relativePath: { eq: "project3.png" }) {
        childImageSharp {
          fluid(maxWidth: 2880) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img alt={alt} fluid={data.project3.childImageSharp.fluid} />
}

export default ImageProjectThree
