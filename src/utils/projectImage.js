import { graphql } from 'gatsby-image'

export const projectImage = graphql`
  fragment projectImage on File {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
